document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    if (galleryItems.length === 0) return;

    // Create lightbox HTML dynamically
    const lightboxHTML = `
        <div class="gallery-lightbox">
            <button class="gallery-close" aria-label="Close Lightbox"><i class="fas fa-times"></i></button>
            <button class="gallery-prev" aria-label="Previous Image"><i class="fas fa-chevron-left"></i></button>
            <img src="" alt="Gallery Preview" class="gallery-lightbox-image">
            <button class="gallery-next" aria-label="Next Image"><i class="fas fa-chevron-right"></i></button>
            <div class="gallery-counter"></div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', lightboxHTML);

    const lightbox = document.querySelector('.gallery-lightbox');
    const lightboxImg = document.querySelector('.gallery-lightbox-image');
    const closeBtn = document.querySelector('.gallery-close');
    const prevBtn = document.querySelector('.gallery-prev');
    const nextBtn = document.querySelector('.gallery-next');
    const counter = document.querySelector('.gallery-counter');

    let currentIndex = 0;
    // Extract full size image sources
    const images = Array.from(galleryItems).map(item => item.querySelector('img').src);

    const updateLightbox = () => {
        // Simple fade out/in effect for image change
        lightboxImg.style.opacity = '0';
        setTimeout(() => {
            lightboxImg.src = images[currentIndex];
            lightboxImg.onload = () => {
                lightboxImg.style.opacity = '1';
            };
            counter.textContent = `${String(currentIndex + 1).padStart(2, '0')} / ${String(images.length).padStart(2, '0')}`;
        }, 150);
    };

    const openLightbox = (index) => {
        currentIndex = index;
        lightboxImg.style.transition = 'opacity 0.2s ease, transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        lightboxImg.style.opacity = '1';
        lightboxImg.src = images[currentIndex];
        counter.textContent = `${String(currentIndex + 1).padStart(2, '0')} / ${String(images.length).padStart(2, '0')}`;
        
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    };

    const closeLightbox = () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = ''; // Restore background scrolling
    };

    const prevImage = () => {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        updateLightbox();
    };

    const nextImage = () => {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        updateLightbox();
    };

    // Attach Event Listeners
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => openLightbox(index));
    });

    closeBtn.addEventListener('click', closeLightbox);
    
    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        prevImage();
    });
    
    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        nextImage();
    });

    // Close when clicking outside the image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Keyboard controls
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'ArrowRight') nextImage();
    });
});
