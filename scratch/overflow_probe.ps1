param([int]$Width = 360, [string]$Page = "index.html")
$root = Split-Path $PSScriptRoot -Parent
$html = Get-Content (Join-Path $root $Page) -Raw -Encoding utf8
$probe = @'
<script>
window.addEventListener('load', function () {
  setTimeout(function () {
    var vw = document.documentElement.clientWidth, out = [];
    out.push('VIEWPORT=' + vw + ' SCROLLW=' + document.documentElement.scrollWidth + ' BODYSW=' + document.body.scrollWidth);
    document.querySelectorAll('body *').forEach(function (el) {
      var r = el.getBoundingClientRect();
      if (r.width === 0 && r.height === 0) return;
      if (r.right > vw + 1 || r.left < -1) {
        var p = el.parentElement, parentOver = false;
        if (p) { var pr = p.getBoundingClientRect(); parentOver = (pr.right > vw + 1 || pr.left < -1); }
        if (!parentOver) {
          var cs = getComputedStyle(el);
          out.push(el.tagName + '#' + el.id + '.' + (el.className && el.className.baseVal === undefined ? el.className : '') +
            ' L=' + Math.round(r.left) + ' R=' + Math.round(r.right) + ' W=' + Math.round(r.width) + ' pos=' + cs.position);
        }
      }
    });
    var pre = document.createElement('pre'); pre.id = 'probe-out';
    var A = '@@', B = 'PROBE', C = 'END';
    pre.textContent = A + B + A + '\n' + out.join('\n') + '\n' + A + C + A;
    document.body.appendChild(pre);
  }, 1500);
});
</script>
'@
$html = $html -replace '</body>', ($probe + '</body>')
$tmp = Join-Path $root "__probe_tmp.html"
Set-Content -Path $tmp -Value $html -Encoding utf8
$edge = @("${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe", "$env:ProgramFiles\Microsoft\Edge\Application\msedge.exe", "$env:ProgramFiles\Google\Chrome\Application\chrome.exe") | Where-Object { Test-Path $_ } | Select-Object -First 1
$uri = ([System.Uri]$tmp).AbsoluteUri
$dom = & $edge --headless=new --disable-gpu --window-size="$Width,900" --virtual-time-budget=6000 --dump-dom $uri 2>$null | Out-String
Remove-Item $tmp -ErrorAction SilentlyContinue
if ($dom -match '(?s)@@PROBE@@(.*?)@@END@@') { [System.Net.WebUtility]::HtmlDecode($Matches[1]) } else { "NO PROBE OUTPUT (browser: $edge)" }
