const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.getElementById('Prox');
const prevButton = document.getElementById('Ante');
const dots = Array.from(document.querySelectorAll('.dot'));

let currentIndex = 0;

const updateCarousel = (index) => {
    const slideWidth = slides[0].getBoundingClientRect().width;
    const amountToMove = slideWidth * index;
    track.style.transform = 'translateX(-' + amountToMove + 'px)';
    updateDots(index); 
};

const updateDots = (index) => {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
};


const goToNextSlide = () => {
    currentIndex = (currentIndex + 1) % slides.length; 
    updateCarousel(currentIndex);
};


nextButton.addEventListener('click', goToNextSlide);


prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length; 
    updateCarousel(currentIndex);
});


dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        const index = parseInt(e.target.dataset.index);
        currentIndex = index;
        updateCarousel(currentIndex);
    });
});

setInterval(goToNextSlide, 3000);
