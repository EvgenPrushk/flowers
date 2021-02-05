const flowersSlider = new Swiper('.flowers-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 6,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,    
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,      
    },
    // when window width is >=  576px
    576: {
      slidesPerView: 4,     
    },
   // when window width is >=  992px
    992: {
      slidesPerView: 6,
      
    }
  }
 
  });

  const reviewSlider = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

     
  });