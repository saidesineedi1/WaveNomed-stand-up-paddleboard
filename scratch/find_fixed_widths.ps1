Get-ChildItem -Path . -Filter *.css | ForEach-Object {
    $file = $_.Name
    $lines = Get-Content $_.FullName
    for ($i = 0; $i -lt $lines.Length; $i++) {
        if ($lines[$i] -match "(width|min-width)\s*:\s*[3-9]\d{2}px") {
            Write-Host "$file : L$($i+1) : $($lines[$i].Trim())"
        }
    }
}
