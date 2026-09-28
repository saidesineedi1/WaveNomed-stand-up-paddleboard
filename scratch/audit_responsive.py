import os
import re

css_files = [f for f in os.listdir('.') if f.endswith('.css')]

print("Found CSS files:", css_files)

for css_file in css_files:
    path = os.path.join('.', css_file)
    with open(path, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
    
    # Check media queries
    media_queries = re.findall(r'@media[^{]+\{', content)
    
    # Check for fixed large widths
    large_widths = re.findall(r'(width|min-width)\s*:\s*([4-9]\d{2}|[1-9]\d{3})px', content)
    
    print(f"\n--- File: {css_file} (Lines: {len(content.splitlines())}) ---")
    print(f"Media queries count: {len(media_queries)}")
    if media_queries:
        for mq in media_queries[:5]:
            print("  ", mq.strip())
    print(f"Large fixed pixel widths count: {len(large_widths)}")
    if large_widths:
        for lw in large_widths[:5]:
            print("  ", lw)
