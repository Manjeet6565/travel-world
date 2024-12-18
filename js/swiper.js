const swiper = new Swiper(".swiper", {
  slidesPerView: 1, // Corrected property name
  effect: "creative",
  creativeEffect: {
    prev: {
      // Setting 'translateZ(-400px)' on the previous slide
      translate: [0, 0, -400], // Corrected property name
    },
    next: {
      // Setting 'translateX(100%)' on the next slide
      translate: ["100%", 0, 0], // Corrected property name
    },
  },
  loop: true, // Enables looping of slides
  direction: "horizontal", // Correct direction

  autoplay: {
    delay: 5000,
  },
  speed:400,
  spaceBetween: 100,
});


const swiper2 = new Swiper(".swiper2", {
  slidesPerView: 3, // Corrected property name
  spaceBetween:35,
  slidesPreGroup:1,
  loop: true, // Enables looping of slides
  fade:true,
  centerSlide:true,
  grabCursor:true,
  loopfillGroupwithBlank:true,


  autoplay: {
    delay: 5000,
  },
  speed: 400,
  
  breakpoints: {
    320: {
      slidesPerView: 1,
    
    },
    768: {
      slidesPerView: 2,
      
    },
    968: {
      slidesPerView: 3,
      
    }
  }
});


const swiper3 = new Swiper(".swiper3", {
  slidesPerView: 2, // Corrected property name
  spaceBetween:35,
  slidesPreGroup:1,
  loop: true, // Enables looping of slides
  fade:true,
  centerSlide:true,
  grabCursor:true,
  loopfillGroupwithBlank:true,


  autoplay: {
    delay: 5000,
  },
  speed: 400,
  
  breakpoints: {
    320: {
      slidesPerView: 1,
    
    },
    768: {
      slidesPerView: 2,
      
    },
    968: {
      slidesPerView: 2,
      
    }
  }
});


const swiper4 = new Swiper(".swiper4", {
  slidesPerView: 1, // Corrected property name
  spaceBetween:95,
  slidesPreGroup:1,
  loop: true, // Enables looping of slides
  fade:true,
  centerSlide:true,
  grabCursor:true,
  loopfillGroupwithBlank:true,


  autoplay: {
    delay: 5000,
  },
  speed: 400,
  
  breakpoints: {
    320: {
      slidesPerView: 1,
    
    },
    768: {
      slidesPerView: 1,
      
    },
    968: {
      slidesPerView: 1,
      
    }
  }
});
