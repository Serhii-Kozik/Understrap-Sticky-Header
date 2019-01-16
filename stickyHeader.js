          /**
           * Sticky menu scroll controller
           */

            var lastScrollTop = 0, delta = 55, elementOffset = $('#wrapper-navbar').position();
            
            $(window).scroll(function(event){
            
              var st = $(this).scrollTop();
              var screen = $('.site').width();

              if(screen < 992){
              
                if(Math.abs(lastScrollTop - st) <= delta )
                  return;

              if (st > lastScrollTop){
              
                  // downscroll code
                  $('#wrapper-navbar').css({"top":"-120px"})
                  
              } else {
              
                  // upscroll code
                  $('#wrapper-navbar').css({"top":elementOffset.top+"px"})
                  
              }
              
              lastScrollTop = st;
              }
            });
          
