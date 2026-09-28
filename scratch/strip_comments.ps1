$files = Get-ChildItem -Path . -Recurse -Include *.html, *.css, *.js | Where-Object { $_.FullName -notmatch "scratch" -and $_.FullName -notmatch "\.git" }

foreach ($f in $files) {
    $text = [System.IO.File]::ReadAllText($f.FullName)
    $ext = $f.Extension.ToLower()

    if ($ext -eq ".html") {
        # Remove <!-- ... -->
        $text = [regex]::Replace($text, "(?s)<!--.*?-->", "")
    }
    elseif ($ext -eq ".css") {
        # Remove /* ... */
        $text = [regex]::Replace($text, "(?s)/\*.*?\*/", "")
    }
    elseif ($ext -eq ".js") {
        # Remove /* ... */
        $text = [regex]::Replace($text, "(?s)/\*.*?\*/", "")
        # Remove single line comments that start with // at start of line or after whitespace
        $text = [regex]::Replace($text, "(?m)^\s*//.*$", "")
    }

    # Clean multi-line blank spaces
    $text = [regex]::Replace($text, "(\r?\n){3,}", "`r`n`r`n")

    [System.IO.File]::WriteAllText($f.FullName, $text)
    Write-Host "Cleaned green comment lines from: $($f.Name)"
}
Write-Host "All green comment lines removed successfully."
