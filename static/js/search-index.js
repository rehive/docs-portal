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
            
            // Setup modal search
            this.setupModalSearch();
            
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
        // The search UI is now handled by the modal
        // No need to create fixed search containers
    }
    
    // Legacy method - no longer used with modal implementation
    
    // Legacy method - no longer used with modal implementation
    
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
    
    // Legacy method - no longer used with modal implementation
    
    // Legacy method - no longer used with modal implementation
    
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
    
    // Legacy method - no longer used with modal implementation
    
    // Legacy method - no longer used with modal implementation
    
    // Legacy method - no longer used with modal implementation
    
    // Legacy method - no longer used with modal implementation
    
    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (event) => {
            // Ctrl+K or Cmd+K to open search modal
            if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
                event.preventDefault();
                this.openSearchModal();
            }
            
            // Escape to close search modal
            if (event.key === 'Escape') {
                this.closeSearchModal();
            }
        });
    }
    
    openSearchModal() {
        const modal = document.getElementById('search-modal');
        const input = document.getElementById('search-input-modal');
        
        if (modal && input) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // Focus input after modal animation
            setTimeout(() => {
                input.focus();
            }, 100);
        }
    }
    
    closeSearchModal() {
        const modal = document.getElementById('search-modal');
        const input = document.getElementById('search-input-modal');
        
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
            
            // Clear search input and results
            if (input) {
                input.value = '';
                this.hideModalResults();
            }
        }
    }
    
    hideModalResults() {
        const resultsContainer = document.getElementById('search-results-modal');
        if (resultsContainer) {
            resultsContainer.innerHTML = '';
            resultsContainer.style.display = 'none';
        }
    }
    
    setupModalSearch() {
        const input = document.getElementById('search-input-modal');
        
        if (input) {
            input.addEventListener('input', (e) => this.handleModalSearch(e));
            input.addEventListener('keydown', (e) => this.handleModalKeydown(e));
        }
    }
    
    handleModalSearch(event) {
        const query = event.target.value.trim();
        
        if (query.length < 2) {
            this.hideModalResults();
            return;
        }
        
        const results = this.search(query);
        this.displayModalResults(results);
    }
    
    handleModalKeydown(event) {
        if (event.key === 'Escape') {
            this.closeSearchModal();
        }
    }
    
    displayModalResults(results) {
        const resultsContainer = document.getElementById('search-results-modal');
        
        if (!resultsContainer) return;
        
        if (results.length === 0) {
            resultsContainer.innerHTML = '<div class="search-no-results">No results found</div>';
        } else {
            resultsContainer.innerHTML = results.map(result => `
                <div class="search-result-item" data-url="${result.url}">
                    <div class="search-result-title">${this.highlightText(result.title, this.getModalQuery())}</div>
                    <div class="search-result-section">${result.section}</div>
                    <div class="search-result-excerpt">${this.getExcerpt(result.content, this.getModalQuery())}</div>
                </div>
            `).join('');
            
            // Add click listeners to results
            resultsContainer.querySelectorAll('.search-result-item').forEach(item => {
                item.addEventListener('click', () => {
                    const url = item.getAttribute('data-url');
                    this.closeSearchModal();
                    window.location.href = url;
                });
            });
        }
        
        resultsContainer.style.display = 'block';
    }
    
    getModalQuery() {
        const input = document.getElementById('search-input-modal');
        return input ? input.value.trim() : '';
    }
}

// Initialize search when script loads
const searchInstance = new DocsSearch();

// Global functions for onclick handlers
window.openSearchModal = () => searchInstance.openSearchModal();
window.closeSearchModal = () => searchInstance.closeSearchModal();