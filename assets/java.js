



$(document).ready(function(){

    AOS.init();
    M.AutoInit();
    
        $('.carousel.carousel-slider').carousel({
            fullWidth: true,
            // pressed: true,
            duration: .1,
            shift: 10,
            numVisible: 5,
            indicators: true
        });
    
  });


