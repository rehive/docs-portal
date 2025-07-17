#!/usr/bin/env python3
import os
import json
import re
from pathlib import Path
import yaml

def extract_frontmatter_and_content(file_path):
    """Extract frontmatter and content from a markdown file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check for frontmatter
        if content.startswith('---'):
            parts = content.split('---', 2)
            if len(parts) >= 3:
                frontmatter_str = parts[1].strip()
                body_content = parts[2].strip()
                
                try:
                    frontmatter = yaml.safe_load(frontmatter_str) or {}
                except yaml.YAMLError:
                    frontmatter = {}
            else:
                frontmatter = {}
                body_content = content
        else:
            frontmatter = {}
            body_content = content
            
        return frontmatter, body_content
    except Exception as e:
        print(f"Error reading {file_path}: {e}")
        return {}, ""

def clean_content(content):
    """Clean markdown content for search indexing."""
    # Remove markdown syntax
    content = re.sub(r'```[\s\S]*?```', '', content)  # Remove code blocks
    content = re.sub(r'`([^`]+)`', r'\1', content)    # Remove inline code
    content = re.sub(r'#+ ', '', content)             # Remove headers
    content = re.sub(r'\[([^\]]+)\]\([^)]+\)', r'\1', content)  # Remove links, keep text
    content = re.sub(r'!\[([^\]]*)\]\([^)]+\)', '', content)    # Remove images
    content = re.sub(r'\*\*([^*]+)\*\*', r'\1', content)       # Remove bold
    content = re.sub(r'\*([^*]+)\*', r'\1', content)           # Remove italic
    content = re.sub(r'^\s*[-*+]\s+', '', content, flags=re.MULTILINE)  # Remove list markers
    content = re.sub(r'^\s*\d+\.\s+', '', content, flags=re.MULTILINE)  # Remove numbered lists
    content = re.sub(r'\n\s*\n', '\n', content)       # Remove extra newlines
    content = re.sub(r'[^\w\s\-.,!?()"]', ' ', content)  # Remove special chars except basic punctuation
    content = re.sub(r'\s+', ' ', content)            # Normalize whitespace
    
    return content.strip()

def get_section_name(file_path, content_dir):
    """Get section name from file path."""
    relative_path = os.path.relpath(file_path, content_dir)
    parts = relative_path.split(os.sep)
    
    if len(parts) > 1:
        return parts[0].replace('-', ' ').title()
    return "General"

def generate_url(file_path, content_dir):
    """Generate URL from file path."""
    relative_path = os.path.relpath(file_path, content_dir)
    
    # Remove .md extension
    if relative_path.endswith('.md'):
        relative_path = relative_path[:-3]
    
    # Handle _index.md files
    if relative_path.endswith('/_index'):
        relative_path = relative_path[:-7]
    
    # Convert spaces to hyphens in directory names (Hugo's URL generation)
    relative_path = relative_path.replace(' ', '-')
    
    # Ensure it starts with /
    if not relative_path.startswith('/'):
        relative_path = '/' + relative_path
    
    # Handle root index
    if relative_path == '/':
        return '/'
    
    # Ensure it ends with /
    if not relative_path.endswith('/'):
        relative_path += '/'
    
    return relative_path

def generate_search_index():
    """Generate search index from markdown files."""
    content_dir = Path('content')
    if not content_dir.exists():
        print("Content directory not found!")
        return
    
    documents = []
    
    # Walk through all markdown files
    for md_file in content_dir.rglob('*.md'):
        frontmatter, content = extract_frontmatter_and_content(md_file)
        
        # Skip if no content
        if not content.strip():
            continue
        
        # Get title from frontmatter or filename
        title = frontmatter.get('title', '')
        if not title:
            title = md_file.stem.replace('_', ' ').replace('-', ' ').title()
            if title == 'Index':
                # Use parent directory name for index files
                title = md_file.parent.name.replace('-', ' ').title()
        
        # Clean and prepare content for search
        clean_text = clean_content(content)
        
        # Skip if content is too short
        if len(clean_text) < 20:
            continue
        
        # Get section name
        section = get_section_name(md_file, content_dir)
        
        # Generate URL
        url = generate_url(md_file, content_dir)
        
        # Add to documents
        documents.append({
            'title': title,
            'content': clean_text[:1000],  # Limit content length
            'section': section,
            'url': url,
            'weight': frontmatter.get('weight', 0)
        })
    
    # Sort by weight and section
    documents.sort(key=lambda x: (x['section'], x['weight'], x['title']))
    
    # Create search index
    search_index = {
        'documents': documents,
        'generated_at': str(Path().cwd()),
        'total_documents': len(documents)
    }
    
    # Write to static directory
    static_dir = Path('static')
    static_dir.mkdir(exist_ok=True)
    
    output_file = static_dir / 'search-index.json'
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(search_index, f, indent=2, ensure_ascii=False)
    
    print(f"Generated search index with {len(documents)} documents")
    print(f"Search index saved to: {output_file}")

if __name__ == '__main__':
    generate_search_index()