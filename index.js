tl = new TimelineMax();

tl.staggerFrom(".navbar > div", 1.6, {
    opacity: 0,
    y: 60,
    ease: Expo.easeInOut,
    delay: 0,
});


tl.staggerFrom(
    ".site-menu > div",
    1, {
        opacity: 0,
        x: -60,
        ease: Power2.easeOut,
        delay: -1,
    },
    0.2
);

tl.staggerFrom(
    ".header > div",
    1, {
        opacity: 0,
        x: -10000,
        ease: Power2.easeOut,
        delay: -1,
    },
    0.2
);
let text1 = document.getElementById('l1');
let text2 = document.getElementById('l2');
window.addEventListener('scroll', function() {
    let value = window.scrollY;
    text1.style.marginLeft = value * 2 + 'px';
    text2.style.marginRight = value * 2 + 'px';
})

function colChang() {
    if (this.scrollY > this.innerHeight / 1.15) {
        document.getElementById("a1").classList.add("inv");
        document.getElementById("a2").classList.add("inv");
        document.getElementById("a3").classList.add("inv");
        document.getElementById("a4").classList.add("inv");
        document.getElementById("a5").classList.add("inv");

        document.getElementById("imag").classList.add("imginv");
    } else {
        document.getElementById("a1").classList.remove("inv");
        document.getElementById("a2").classList.remove("inv");
        document.getElementById("a3").classList.remove("inv");
        document.getElementById("a4").classList.remove("inv");
        document.getElementById("a5").classList.remove("inv");
        document.getElementById("imag").classList.remove("imginv");
    }
}
window.addEventListener('scroll', colChang)


let slidePosition = 0;
const slides = document.getElementsByClassName('carousel__item');
const totalSlides = slides.length;

document.
getElementById('carousel__button--next')
    .addEventListener("click", function() {
        moveToNextSlide();
    });
document.
getElementById('carousel__button--prev')
    .addEventListener("click", function() {
        moveToPrevSlide();
    });

function updateSlidePosition() {
    for (let slide of slides) {
        slide.classList.remove('carousel__item--visible');
        slide.classList.add('carousel__item--hidden');
    }

    slides[slidePosition].classList.add('carousel__item--visible');
}

function moveToNextSlide() {
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }

    updateSlidePosition();
}

function moveToPrevSlide() {
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }

    updateSlidePosition();
}

function changCol() {
    if (this.scrollY > this.innerHeight / 0.45) {
        document.getElementById("a1").classList.remove("inv");
        document.getElementById("a2").classList.remove("inv");
        document.getElementById("a3").classList.remove("inv");
        document.getElementById("a4").classList.remove("inv");
        document.getElementById("a5").classList.remove("inv");

        document.getElementById("imag").classList.remove("imginv");
    }

}
window.addEventListener('scroll', changCol)