import os
import re

def remove_html_comments(text):
    # Remove HTML comments <!-- ... --> except conditional comments if any
    pattern = r'<!--(?!\[if [^\]]+\]>)([\s\S]*?)-->'
    return re.sub(pattern, '', text)

def remove_css_comments(text):
    # Remove CSS comments /* ... */
    pattern = r'/\*[\s\S]*?\*/'
    return re.sub(pattern, '', text)

def remove_js_comments(text):
    # Remove JS comments /* ... */ and // ...
    # We use a state machine / regex to avoid removing // inside strings or URLs (http://)
    def replacer(match):
        s = match.group(0)
        if s.startswith('/'):
            return "" # it's a comment
        else:
            return s # it's a string literal or regex
    
    pattern = r'("(?:\\.|[^"\\])*"|\'(?:\\.|[^\'\\])*\'|`(?:\\.|[^`\\])*`|/(?:[^\/\\]|\\.)+/g?m?s?u?y?)|(/\*[\s\S]*?\*/|//.*)'
    # Simpler regex for JS comments that preserves strings/regexes:
    pattern = r'("(?:\\.|[^"\\])*"|\'(?:\\.|[^\'\\])*\'|`(?:\\.|[^`\\])*`)|(/\*[\s\S]*?\*/|//.*)'
    
    def replace_fn(m):
        if m.group(1):
            return m.group(1) # Keep strings intact
        return "" # Remove comment
        
    return re.sub(pattern, replace_fn, text)

# Find all HTML, CSS, and JS files in the workspace
workspace_dir = '.'
all_files = []
for root, dirs, files in os.walk(workspace_dir):
    # Ignore scratch and .git dirs
    if 'scratch' in root or '.git' in root or '.system_generated' in root:
        continue
    for file in files:
        if file.endswith('.html') or file.endswith('.css') or file.endswith('.js'):
            all_files.append(os.path.join(root, file))

print(f"Found {len(all_files)} files to strip comments from:")
for f in all_files:
    print(" -", f)

modified_count = 0
for file_path in all_files:
    with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
    
    original = content
    if file_path.endswith('.html'):
        cleaned = remove_html_comments(content)
    elif file_path.endswith('.css'):
        cleaned = remove_css_comments(content)
    elif file_path.endswith('.js'):
        cleaned = remove_js_comments(content)
    else:
        cleaned = content
    
    # Clean up empty consecutive lines if comments left multiple blank lines
    cleaned = re.sub(r'\n\s*\n\s*\n', '\n\n', cleaned)
    
    if cleaned != original:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(cleaned)
        modified_count += 1
        print(f"Cleaned comments from: {file_path}")

print(f"\nDone! Cleaned comment lines from {modified_count} files.")
