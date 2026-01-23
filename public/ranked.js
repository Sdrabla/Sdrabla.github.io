// Lightbox functionality
const lightboxModal = document.getElementById('lightboxModal');
const lightboxImage = document.getElementById('lightboxImage');
const projectImages = document.querySelectorAll('.project-image');

// Open lightbox when clicking an image
projectImages.forEach((img) => {
    img.addEventListener('click', (e) => {
        e.stopPropagation();
        lightboxImage.src = img.src;
        lightboxImage.alt = img.alt || 'Enlarged project image';
        lightboxModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });
});

// Close lightbox when clicking outside the image
lightboxModal.addEventListener('click', (e) => {
    if (e.target === lightboxModal) {
        closeLightbox();
    }
});

// Close lightbox function
function closeLightbox() {
    lightboxModal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
}

// Close lightbox with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightboxModal.classList.contains('active')) {
        closeLightbox();
    }
});
