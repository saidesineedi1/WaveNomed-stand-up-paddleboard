Get-ChildItem -Path . -Filter *.css | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    $mediaMatches = [regex]::Matches($content, '@media[^{]+\{')
    $fixedWidthMatches = [regex]::Matches($content, '(width|min-width)\s*:\s*[4-9]\d{2}px')
    
    Write-Host "File: $($_.Name)"
    Write-Host "  Media queries: $($mediaMatches.Count)"
    Write-Host "  Fixed large widths: $($fixedWidthMatches.Count)"
    
    # Check max-width: 100% or overflow-x rules
    $hasOverflowFix = $content -match "overflow-x\s*:\s*hidden"
    Write-Host "  Has overflow-x: hidden: $hasOverflowFix"
    Write-Host "----------------------------------------"
}
