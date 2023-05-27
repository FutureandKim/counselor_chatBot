//slide-wrap
var slideWrapper = document.getElementById('introList');
//current slideIndexition
var slideIndex = 0;
//items
var slides = document.querySelectorAll('#introList ul li');
//number of slides
var totalSlides = slides.length;
//get the slide width
var sliderWidth = slideWrapper.clientWidth;
//set width of items
slides.forEach(function (element) {
    element.style.width = sliderWidth + 'vw';
})
//set width to be 'x' times the number of slides
var slider = document.querySelector('#introList ul#slide');
slider.style.width = sliderWidth * totalSlides + 'vw';

// next, prev
var nextBtn = document.getElementById('next');
var prevBtn = document.getElementById('previous');
nextBtn.addEventListener('click', function () {
    plusSlides(1);
});
prevBtn.addEventListener('click', function () {
    plusSlides(-1);
});

// hover


function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlides(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    slideIndex = n;
    if (slideIndex == -1) {
        slideIndex = totalSlides - 1;
    } else if (slideIndex === totalSlides) {
        slideIndex = 0;
    }

    slider.style.left = -(sliderWidth * slideIndex) + 'vw';
    pageBar();
}

//하단 페이지바
slides.forEach(function () {
    var li = document.createElement('li');
    document.querySelector('#pageBar ul').appendChild(li);
})

function pageBar() {
    var dots = document.querySelectorAll('#pageBar ul li');
    dots.forEach(function (element) {
        element.classList.remove('active');
    });
    dots[slideIndex].classList.add('active');
}

pageBar();


const start = document.querySelector('.startButton');
start.addEventListener('click', () => {
  window.open('loginPage.html', '_blank');
});
