param([int]$Width = 360, [string]$Page = "index.html")
$root = Split-Path $PSScriptRoot -Parent
$pageUri = ([System.Uri](Join-Path $root $Page)).AbsoluteUri
$wrapper = @"
<!DOCTYPE html><html><body style="margin:0">
<iframe id="f" src="$pageUri" style="width:${Width}px;height:900px;border:0"></iframe>
<script>
document.getElementById('f').addEventListener('load', function () {
  var f = this;
  setTimeout(function () {
    var d = f.contentDocument, vw = d.documentElement.clientWidth, out = [];
    out.push('VIEWPORT=' + vw);
    d.querySelectorAll('body *').forEach(function (el) {
      var r = el.getBoundingClientRect();
      if (r.width === 0 && r.height === 0) return;
      if (r.right > vw + 1 || r.left < -1) {
        var p = el.parentElement, po = false;
        if (p) { var pr = p.getBoundingClientRect(); po = (pr.right > vw + 1 || pr.left < -1); }
        if (!po) out.push(el.tagName + '#' + el.id + '.' + (typeof el.className === 'string' ? el.className : '') +
          ' L=' + Math.round(r.left) + ' R=' + Math.round(r.right) + ' W=' + Math.round(r.width));
      }
    });
    var A = '@@', pre = document.createElement('pre');
    pre.textContent = A + 'PROBE' + A + '\n' + out.join('\n') + '\n' + A + 'END' + A;
    document.body.appendChild(pre);
  }, 2000);
});
</script></body></html>
"@
$tmp = Join-Path $root "__probe_wrap.html"
Set-Content -Path $tmp -Value $wrapper -Encoding utf8
$edge = @("${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe", "$env:ProgramFiles\Microsoft\Edge\Application\msedge.exe", "$env:ProgramFiles\Google\Chrome\Application\chrome.exe") | Where-Object { Test-Path $_ } | Select-Object -First 1
$dom = & $edge --headless=new --disable-gpu --allow-file-access-from-files --window-size="800,1000" --virtual-time-budget=8000 --dump-dom ([System.Uri]$tmp).AbsoluteUri 2>$null | Out-String
Remove-Item $tmp -ErrorAction SilentlyContinue
if ($dom -match '(?s)@@PROBE@@(.*?)@@END@@') { [System.Net.WebUtility]::HtmlDecode($Matches[1]) } else { "NO PROBE OUTPUT" }
