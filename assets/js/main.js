 // banner-carousel
 if ($('.banner-carousel').length) {
    $('.banner-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        active: true,
        smartSpeed: 1000,
        autoplay: 6000,
        navText: [ '<span class="fas fa-long-arrow-alt-right"></span>', '<span class="fas fa-long-arrow-alt-left"></span>' ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            800:{
                items:1
            },
            1024:{
                items:1
            }
        }
    });
}
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });