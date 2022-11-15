var slideIndex = 1;
showSlides(slideIndex);

function controlSlide(n) {
    slideIndex += n;
    showSlides(slideIndex);
}

function dotsSlide(n) {
    slideIndex = n;
    showSlides(slideIndex);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let j = 0; j < dots.length; j++) {
        dots[j].className = dots[j].className.replace(" active","");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}




