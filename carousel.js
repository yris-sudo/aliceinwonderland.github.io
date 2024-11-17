document.addEventListener('DOMContentLoaded', () => {
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;

    function showItem(index) {
        carouselItems.forEach((item, i) => {
            item.style.opacity = 0; 
            item.style.display = 'none'; 
        });
        carouselItems[index].style.display = 'flex';
        setTimeout(() => {
            carouselItems[index].style.opacity = 1; 
        }, 50); 
        updateButtonVisibility(index);
    }

    function updateButtonVisibility(index) {
        prevBtn.style.display = index === 0 ? 'none' : 'block';
        nextBtn.style.display = index === carouselItems.length - 1 ? 'none' : 'block';
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : carouselItems.length - 1;
        showItem(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex < carouselItems.length - 1) ? currentIndex + 1 : 0;
        showItem(currentIndex);
    });

    showItem(currentIndex);
});