document.addEventListener('DOMContentLoaded', function() {
    // Sample data for trending books
    const trendingBooks = [
        {
            title: "The Silent Patient",
            author: "Alex Michaelides",
            downloads: "12,345",
            category: "Fiction",
            coverText: "TS"
        },
        {
            title: "Atomic Habits",
            author: "James Clear",
            downloads: "24,678",
            category: "Self-Help",
            coverText: "AH"
        },
        {
            title: "Sapiens",
            author: "Yuval Noah Harari",
            downloads: "18,932",
            category: "History",
            coverText: "S"
        },
        {
            title: "Dune",
            author: "Frank Herbert",
            downloads: "15,421",
            category: "Sci-Fi",
            coverText: "D"
        },
        {
            title: "The Psychology of Money",
            author: "Morgan Housel",
            downloads: "10,987",
            category: "Finance",
            coverText: "PM"
        },
        {
            title: "Educated",
            author: "Tara Westover",
            downloads: "9,876",
            category: "Biography",
            coverText: "E"
        }
    ];

function generateBookCards() {
    const container = document.getElementById('trendingBooks');
    
    // Updated book data with image URLs
    const trendingBooks = [
        {
            title: "The Silent Patient",
            author: "Alex Michaelides",
            downloads: "12,345",
            category: "Fiction",
            imageUrl: "https://m.media-amazon.com/images/I/71tR7ZEQ1gL._AC_UF1000,1000_QL80_.jpg"
        },
        {
            title: "Atomic Habits",
            author: "James Clear",
            downloads: "24,678",
            category: "Self-Help",
            imageUrl: "https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UF1000,1000_QL80_.jpg"
        },
        {
            title: "Sapiens",
            author: "Yuval Noah Harari",
            downloads: "18,932",
            category: "History",
            imageUrl: "https://m.media-amazon.com/images/I/713jIoMO3UL._AC_UF1000,1000_QL80_.jpg"
        },
        {
            title: "Dune",
            author: "Frank Herbert",
            downloads: "15,421",
            category: "Sci-Fi",
            imageUrl: "https://m.media-amazon.com/images/I/81ym3QUd3KL._AC_UF1000,1000_QL80_.jpg"
        },
        {
            title: "The Psychology of Money",
            author: "Morgan Housel",
            downloads: "10,987",
            category: "Finance",
            imageUrl: "https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UF1000,1000_QL80_.jpg"
        },
        {
            title: "Educated",
            author: "Tara Westover",
            downloads: "9,876",
            category: "Biography",
            imageUrl: "https://m.media-amazon.com/images/I/71r7I7MORJL._AC_UF1000,1000_QL80_.jpg"
        }
    ];

    container.innerHTML = ''; // Clear any existing content
    
    trendingBooks.forEach(book => {
        const col = document.createElement('div');
        col.className = 'col-md-6 col-lg-4 col-xl-3 mb-4';
        
        col.innerHTML = `
            <div class="book-card h-100">
                <div class="book-cover" style="background-image: url('${book.imageUrl}')">
                    <div class="book-cover-text">
                        <div class="book-title">${book.title}</div>
                        <div class="book-author">${book.author}</div>
                    </div>
                </div>
                <div class="book-info">
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="download-count"><i class="fas fa-download me-1"></i> ${book.downloads}</span>
                        <div>
                            <span class="badge bg-primary-light text-primary">${book.category}</span>
                            <a href="#" class="btn btn-sm btn-primary ms-2">Download</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        container.appendChild(col);
    });
}

    // Initialize the page
    generateBookCards();

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add active class to nav items on scroll
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navItems = document.querySelectorAll('.nav-link');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });
});