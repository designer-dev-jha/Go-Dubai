 
 $(document).ready(function(){
 $(".case6-slider-all").slick({
              margin: "30",
              slidesToShow: 3,
              arrows: true,
              centerMode: true,
              loop: true,
              centerMode: false,
              prevArrow: $(".testimonial-prev-arrow"),
              nextArrow: $(".testimonial-next-arrow"),
              draggable: true,
              centerPadding: "10px",
              dots: false,
              scroll: true,
              responsive: [
                {
                  breakpoint: 769,
                  settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: "40px",
                    slidesToShow: 2,
                  },
                },
                {
                  breakpoint: 480,
                  settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: "40px",
                    slidesToShow: 1,
                  },
                },
              ],
            });



            
              });