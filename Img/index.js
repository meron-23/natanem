const galleryData = {
    1: {
        title: "Hub of africa addis",
        date: "January 28, 2024",
        description: "Brighten up your summer wardrobe with our colorful SS16 collection!",
        images: [
            "Img/runwayImg1.jpg",
            "Img/runwayImg2.jpg",
            "Img/runwayImg3.jpg",
            "Img/runwayImg4.jpg",
            "Img/runwayImg5.jpg",
            "Img/runwayImg6.jpg",
            "Img/runwayImg7.jpg",
            "Img/runwayImg8.jpg",
            "Img/runwayImg9.jpg",
            "Img/runwayImg10.jpg",
            "Img/runwayImg11.jpg",
            "Img/runwayImg12.jpg",
            "Img/runwayImg13.jpg",
            "Img/runwayImg14.jpg",
            "Img/runwayImg15.jpg",
            "Img/runwayImg16.jpg",
            "Img/runwayImg17.jpg",
            "Img/runwayImg18.jpg",
        ]
        },
    2: {
        title: "Upcoming Event",
        date: "November 5-7, 2025",
        description: "Private viewing of our latest collection at the historic Hôtel de Crillon with the designer present.",
        images: [
            "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ]
            },
        };

tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        gold: '#D4AF37',
                        burgundy: '#800020',
                        darkBurgundy: '#5a0017',
                        lightGold: '#f0e6d2',
                        lightBurgundy: '#a33550',
                        darkGray: '#1a1a1a'
                    },
                    fontFamily: {
                        playfair: ['Playfair Display', 'serif'],
                        montserrat: ['Montserrat', 'sans-serif']
                    },
                    transitionProperty: {
                        'height': 'height',
                        'opacity': 'opacity'
                    }
                }
            }
        }
// DOM elements
const galleryModal = document.getElementById('galleryModal');
const closeGalleryBtn = document.getElementById('closeGallery');
const galleryTitle = document.getElementById('galleryTitle');
const galleryDate = document.getElementById('galleryDate');
const galleryContainer = document.getElementById('galleryContainer');
const eventCards = document.querySelectorAll('.event-card');
const eventNavButtons = document.querySelectorAll('.event-nav-btn');

// Function to open gallery
function openGallery(eventId) {
    const eventData = galleryData[eventId];
    if (!eventData) return;
        // Update gallery content
        galleryTitle.textContent = eventData.title;
        galleryDate.textContent = eventData.date;
            
        // Clear previous images
        galleryContainer.innerHTML = '';
            
        // Add new images
        eventData.images.forEach(imgSrc => {
            const imgElement = document.createElement('div');
            imgElement.className = 'relative overflow-hidden rounded-lg';
            imgElement.innerHTML = `
                    <img src="${imgSrc}" alt="${eventData.title}" class="w-full h-64 object-cover gallery-image">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <p class="text-white text-sm">${eventData.description}</p>
                    </div>
                `;
                galleryContainer.appendChild(imgElement);
            });
            
            // Highlight active navigation button
            eventNavButtons.forEach(btn => {
                if (btn.dataset.event === eventId) {
                    btn.classList.add('bg-gold', 'text-burgundy');
                    btn.classList.remove('text-lightGold');
                } else {
                    btn.classList.remove('bg-gold', 'text-burgundy');
                    btn.classList.add('text-lightGold');
                }
            });
            
            // Show modal with animation
            galleryModal.classList.remove('hidden');
            setTimeout(() => {
                galleryModal.classList.add('modal-active');
            }, 10);
        }

        // Event listeners
        eventCards.forEach(card => {
            card.addEventListener('click', function() {
                const eventId = this.dataset.event;
                openGallery(eventId);
            });
        });

        eventNavButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                const eventId = this.dataset.event;
                openGallery(eventId);
            });
        });

        closeGalleryBtn.addEventListener('click', function() {
            galleryModal.classList.remove('modal-active');
            setTimeout(() => {
                galleryModal.classList.add('hidden');
            }, 300);
        });

        // Close modal when clicking outside content
        galleryModal.addEventListener('click', function(e) {
            if (e.target === galleryModal) {
                galleryModal.classList.remove('modal-active');
                setTimeout(() => {
                    galleryModal.classList.add('hidden');
                }, 300);
            }
        });
