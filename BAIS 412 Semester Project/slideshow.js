var slideimage = [
    'morepics1.png',
    'morepics2.png',
    'morepics3.png',
    'morepics4.png',
    'morepics5.png',
    'morepics6.png',
    'morepics7.png',
    'morepics8.png',
    'morepics9.png',
    'morepics10.png',
    'morepics11.png',
    'morepics12.png'
];

let currentSlideIndex = 0;

function showSlide() {
    var imgElement = document.getElementById('slideimage');

    if (currentSlideIndex >= slideimage.length) {
        currentSlideIndex = 0;
    }

    if (currentSlideIndex < 0) {
        currentSlideIndex = slideimage.length -1;
    }

    imgElement.src = slideimage[currentSlideIndex];
}

function changeSlide(n) {
    currentSlideIndex += n;
    showSlide();
}

function nextSlide() {
    currentSlideIndex++;
    showSlide();
}

showSlide();
setInterval(nextSlide, 4000);