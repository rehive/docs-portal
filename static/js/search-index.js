// Search index generation and search functionality
class DocsSearch {
    constructor() {
        this.index = null;
        this.documents = [];
        this.searchResults = [];
        this.isSearching = false;
        
        // Initialize search when DOM is loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.init());
        } else {
            this.init();
        }
    }
    
    async init() {
        try {
            // Load search index
            await this.loadSearchIndex();
            
            // Setup search UI
            this.setupSearchUI();
            
            // Setup keyboard shortcuts
            this.setupKeyboardShortcuts();
            
            console.log('Search initialized successfully');
        } catch (error) {
            console.error('Failed to initialize search:', error);
        }
    }
    
    async loadSearchIndex() {
        try {
            const response = await fetch('/search-index.json');
            if (!response.ok) {
                throw new Error('Failed to load search index');
            }
            
            const data = await response.json();
            this.documents = data.documents || [];
            
            // Create simple search index
            this.index = this.documents.map((doc, id) => ({
                id,
                title: doc.title.toLowerCase(),
                content: doc.content.toLowerCase(),
                section: doc.section.toLowerCase(),
                url: doc.url
            }));
            
        } catch (error) {
            console.error('Error loading search index:', error);
            this.documents = [];
            this.index = [];
        }
    }
    
    setupSearchUI() {
        // Create search container for desktop (below navbar)
        const desktopNavbar = document.querySelector('.navbar');
        if (desktopNavbar) {
            const searchContainer = this.createSearchContainer('desktop');
            desktopNavbar.insertAdjacentElement('afterend', searchContainer);
        }
        
        // Create search container for mobile
        const mobileNavContent = document.querySelector('.sidenav-content');
        if (mobileNavContent) {
            const searchContainer = this.createSearchContainer('mobile');
            mobileNavContent.insertBefore(searchContainer, mobileNavContent.firstChild);
        }
    }
    
    createSearchContainer(type) {
        const container = document.createElement('div');
        container.className = `search-container search-container-${type}`;
        
        const inputWrapper = document.createElement('div');
        inputWrapper.className = `search-input-wrapper search-input-wrapper-${type}`;
        
        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.placeholder = type === 'desktop' ? 'Search' : 'Search docs...';
        searchInput.className = `search-input search-input-${type}`;
        searchInput.setAttribute('autocomplete', 'off');
        searchInput.setAttribute('spellcheck', 'false');
        
        const searchIcon = document.createElement('div');
        searchIcon.className = 'search-icon';
        searchIcon.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.35-4.35"></path></svg>`;
        
        const keyboardHint = document.createElement('div');
        keyboardHint.className = 'search-keyboard-hint';
        // Show appropriate shortcut based on platform
        const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
        keyboardHint.innerHTML = isMac ? '⌘K' : 'Ctrl+K';
        
        const resultsContainer = document.createElement('div');
        resultsContainer.className = `search-results search-results-${type}`;
        resultsContainer.style.display = 'none';
        
        inputWrapper.appendChild(searchIcon);
        inputWrapper.appendChild(searchInput);
        if (type === 'desktop') {
            inputWrapper.appendChild(keyboardHint);
        }
        
        container.appendChild(inputWrapper);
        container.appendChild(resultsContainer);
        
        // Add event listeners
        searchInput.addEventListener('input', (e) => this.handleSearch(e, type));
        searchInput.addEventListener('focus', () => this.handleFocus(type));
        searchInput.addEventListener('blur', () => this.handleBlur(type));
        searchInput.addEventListener('keydown', (e) => this.handleKeydown(e, type));
        
        return container;
    }
    
    handleSearch(event, type) {
        const query = event.target.value.trim();
        
        if (query.length < 2) {
            this.hideResults(type);
            return;
        }
        
        const results = this.search(query);
        this.displayResults(results, type);
    }
    
    search(query) {
        if (!this.index || this.index.length === 0) {
            return [];
        }
        
        const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 0);
        const results = [];
        
        this.index.forEach(doc => {
            let score = 0;
            let titleMatches = 0;
            let contentMatches = 0;
            
            searchTerms.forEach(term => {
                // Title matches get higher score
                if (doc.title.includes(term)) {
                    titleMatches++;
                    score += 10;
                }
                
                // Content matches
                if (doc.content.includes(term)) {
                    contentMatches++;
                    score += 1;
                }
                
                // Section matches
                if (doc.section.includes(term)) {
                    score += 5;
                }
            });
            
            if (score > 0) {
                const originalDoc = this.documents[doc.id];
                results.push({
                    ...originalDoc,
                    score,
                    titleMatches,
                    contentMatches
                });
            }
        });
        
        // Sort by score (descending) and limit results
        return results.sort((a, b) => b.score - a.score).slice(0, 10);
    }
    
    displayResults(results, type) {
        const resultsContainer = document.querySelector(`.search-results-${type}`);
        
        if (!resultsContainer) return;
        
        if (results.length === 0) {
            resultsContainer.innerHTML = '<div class="search-no-results">No results found</div>';
        } else {
            resultsContainer.innerHTML = results.map(result => `
                <div class="search-result-item" data-url="${result.url}">
                    <div class="search-result-title">${this.highlightText(result.title, this.getCurrentQuery(type))}</div>
                    <div class="search-result-section">${result.section}</div>
                    <div class="search-result-excerpt">${this.getExcerpt(result.content, this.getCurrentQuery(type))}</div>
                </div>
            `).join('');
            
            // Add click listeners to results
            resultsContainer.querySelectorAll('.search-result-item').forEach(item => {
                item.addEventListener('click', () => {
                    const url = item.getAttribute('data-url');
                    window.location.href = url;
                });
            });
        }
        
        resultsContainer.style.display = 'block';
    }
    
    getCurrentQuery(type) {
        const input = document.querySelector(`.search-input-${type}`);
        return input ? input.value.trim() : '';
    }
    
    getExcerpt(content, query) {
        const maxLength = 150;
        const queryTerms = query.toLowerCase().split(' ').filter(term => term.length > 0);
        
        if (queryTerms.length === 0) {
            return content.substring(0, maxLength) + (content.length > maxLength ? '...' : '');
        }
        
        // Find the first occurrence of any search term
        const lowerContent = content.toLowerCase();
        let firstMatch = Infinity;
        
        queryTerms.forEach(term => {
            const index = lowerContent.indexOf(term);
            if (index !== -1 && index < firstMatch) {
                firstMatch = index;
            }
        });
        
        if (firstMatch === Infinity) {
            return content.substring(0, maxLength) + (content.length > maxLength ? '...' : '');
        }
        
        // Extract excerpt around the first match
        const start = Math.max(0, firstMatch - 75);
        const end = Math.min(content.length, start + maxLength);
        let excerpt = content.substring(start, end);
        
        if (start > 0) excerpt = '...' + excerpt;
        if (end < content.length) excerpt = excerpt + '...';
        
        return this.highlightText(excerpt, query);
    }
    
    highlightText(text, query) {
        if (!query) return text;
        
        const queryTerms = query.toLowerCase().split(' ').filter(term => term.length > 0);
        let highlighted = text;
        
        queryTerms.forEach(term => {
            const regex = new RegExp(`(${term})`, 'gi');
            highlighted = highlighted.replace(regex, '<mark>$1</mark>');
        });
        
        return highlighted;
    }
    
    handleFocus(type) {
        const query = this.getCurrentQuery(type);
        if (query.length >= 2) {
            const results = this.search(query);
            this.displayResults(results, type);
        }
    }
    
    handleBlur(type) {
        // Delay hiding results to allow clicking on them
        setTimeout(() => {
            this.hideResults(type);
        }, 200);
    }
    
    handleKeydown(event, type) {
        if (event.key === 'Escape') {
            this.hideResults(type);
            event.target.blur();
        }
    }
    
    hideResults(type) {
        const resultsContainer = document.querySelector(`.search-results-${type}`);
        if (resultsContainer) {
            resultsContainer.style.display = 'none';
        }
    }
    
    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (event) => {
            // Ctrl+K or Cmd+K to focus search
            if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
                event.preventDefault();
                const searchInput = document.querySelector('.search-input-desktop') || 
                                  document.querySelector('.search-input-mobile');
                if (searchInput) {
                    searchInput.focus();
                }
            }
        });
    }
}

// Initialize search when script loads
new DocsSearch();