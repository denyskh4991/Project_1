const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
const sliderImage = document.getElementById('slider-image');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
let currentImageIndex = 0;

updateButtonsVisibility();

prevButton.addEventListener('click', showPrevImage);
nextButton.addEventListener('click', showNextImage);

function showPrevImage() {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        sliderImage.src = "images/" + images[currentImageIndex];
        updateButtonsVisibility();
    }
}

function showNextImage() {
    if (currentImageIndex < images.length - 1) {
        currentImageIndex++;
        sliderImage.src = "images/" + images[currentImageIndex];
        updateButtonsVisibility();
    }
}

function updateButtonsVisibility() {
    prevButton.style.display = currentImageIndex === 0 ? 'none' : 'block';
    nextButton.style.display = currentImageIndex === images.length - 1 ? 'none' : 'block';
}

sliderImage.src = "images/" + images[currentImageIndex];