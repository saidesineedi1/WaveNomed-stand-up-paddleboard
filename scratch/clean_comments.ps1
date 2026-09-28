# Powershell script to clean green comment lines from HTML, CSS, and JS files

$files = Get-ChildItem -Path . -Recurse -Include *.html, *.css, *.js | Where-Object { $_.FullName -notmatch '\\scratch\\' -and $_.FullName -notmatch '\\\.git\\' }

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    if ([string]::IsNullOrEmpty($content)) { continue }
    
    $original = $content
    $ext = $file.Extension.ToLower()

    if ($ext -eq '.html') {
        # Remove HTML comments
        $content = [regex]::Replace($content, '<!--[\s\S]*?-->', '')
    }
    elseif ($ext -eq '.css') {
        # Remove CSS comments
        $content = [regex]::Replace($content, '/\*[\s\S]*?\*/', '')
    }
    elseif ($ext -eq '.js') {
        # Remove JS comments preserving strings
        $pattern = '("(?:\\.|[^"\\])*"|\''(?:\\.|[^\'\\])*\''|`(?:\\.|[^`\\])*`)|(/\*[\s\S]*?\*/|//.*)'
        $content = [regex]::Replace($content, $pattern, {
            param($match)
            if ($match.Groups[1].Success) {
                return $match.Groups[1].Value
            }
            return ""
        })
    }

    # Clean up excess blank lines
    $content = [regex]::Replace($content, '(\r?\n){3,}', "`r`n`r`n")

    if ($content -ne $original) {
        Set-Content -Path $file.FullName -Value $content -Encoding UTF8 -NoNewline
        Write-Host "Removed comment lines from: $($file.Name)"
    }
}
Write-Host "Comment removal complete."
