//mobile menu
var navMain = document.querySelector('.main-nav__items');
var navToggle = document.querySelector('.main-nav__button');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav__items--closed')) {
      navMain.classList.remove('main-nav__items--closed');
      navMain.classList.add('main-nav__items--opened');
    } else {
      navMain.classList.add('main-nav__items--closed');
      navMain.classList.remove('main-nav__items--opened');
    }
  });

//search modal
var searchModal = document.querySelectorAll('.search__input-checkbox');
var searchToggle = document.querySelectorAll('.search__input-wrapper');

for (var i = 0; i < searchToggle.length; i++) {
  var openSearchModal = function() {
    var searchModalIn = arguments.callee.searchModalIn;
    if (searchModalIn.classList.contains('search__input-checkbox--closed')) {
      searchModalIn.classList.remove('search__input-checkbox--closed');
      searchModalIn.classList.add('search__input-checkbox--opened');
    } else {
      searchModalIn.classList.add('search__input-checkbox--closed');
      searchModalIn.classList.remove('search__input-checkbox--opened');
    }
  };
  openSearchModal.x = i;
  openSearchModal.searchModalIn = searchModal[i];
  searchToggle[i].addEventListener('click', openSearchModal, false);
};

//main slider
var slideIndex = 1;
  showSlides(slideIndex);
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("promo-slider__wrapper");
    var dots = document.getElementsByClassName("dot");

    if(n > slides.length) {
      slideIndex = 1;
    }
    if(n < 1) {
      slideIndex = slides.length;
    }
    for(i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for(i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className+= " active";
  }