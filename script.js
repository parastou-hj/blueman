$(function () {
    $("#baner-owl").owlCarousel({
      rtl: true,
      items: 1,
      // nav: true,
      dots: false,
      loop: true,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      // navText: [
      //     '<i class="fa-solid fa-chevron-right"></i>',
      //     '<i class="fa-solid fa-chevron-left"></i>'
      // ],
      responsive: {
        0: {
          items: 1,
        },
      },
    });
  });
  $(".nav-right").click(function () {
    $("#banner-owl").trigger("prev.owl.carousel");
  });
  
  $(".nav-left").click(function () {
    $("#banner-owl").trigger("next.owl.carousel");
  });


  $(function () {
    $("#baner-owl-two").owlCarousel({
      rtl: true,
      items: 1,
      // nav: true,
      dots: true,
      loop: true,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      // navText: [
      //     '<i class="fa-solid fa-chevron-right"></i>',
      //     '<i class="fa-solid fa-chevron-left"></i>'
      // ],
      responsive: {
        0: {
          items: 1,
        },
      },
    });
  });
  $(".nav-right").click(function () {
    $("#banner-owl").trigger("prev.owl.carousel");
  });
  
  $(".nav-left").click(function () {
    $("#banner-owl").trigger("next.owl.carousel");
  });


   $(document).ready(function(){
            $('.bestseller-carousel').owlCarousel({
                rtl: true,
                loop: true,
                // margin: 20,
                nav: true,
                dots: true,
                // autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    576: {
                        items: 2
                    },
                    768: {
                        items: 3
                    },
                    992: {
                        items: 4
                    },
                    1200: {
                        items: 5
                    }
                },
                navText: ['<i class="bi bi-chevron-right"></i>', '<i class="bi bi-chevron-left"></i>']
            });
            
            // Handle active state on hover
            $('.product-card').hover(
                function() {
                    $('.product-card').removeClass('active');
                    $(this).addClass('active');
                },
                function() {
                    // Keep the active state on the third item by default
                    $('.product-card').removeClass('active');
                    $('.bestseller-carousel .owl-item:nth-child(3) .product-card').addClass('active');
                }
            );
        });
    
    
  $(document).ready(function(){
            $('.brands-carousel').owlCarousel({
                rtl: true,
                loop: true,
                margin: 20,
                nav: true,
                dots: true,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
                smartSpeed: 1000,
                responsive: {
                    0: {
                        items: 1
                    },
                    576: {
                        items: 2
                    },
                    768: {
                        items: 3
                    },
                    992: {
                        items: 4
                    },
                    1200: {
                        items: 5
                    },
                    1400: {
                        items: 6
                    }
                }
            });
        });


    
 $(document).ready(function(){
            var articlesCarousel = $('.articles-carousel').owlCarousel({
                rtl: true,
                loop: true,
                // margin: 20,
                nav: false,
                dots: true,
                center: true,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                smartSpeed: 1000,
                stagePadding: 100,
                responsive: {
                    0: {
                        items: 1,
                        stagePadding: 30
                    },
                    576: {
                        items: 1.5,
                        stagePadding: 50
                    },
                    768: {
                        items: 2.2,
                        stagePadding: 70
                    },
                    992: {
                        items: 3,
                        stagePadding: 80
                    },
                    1200: {
                        items: 3.5,
                        stagePadding: 100
                    },
                    1400: {
                        items: 4,
                        stagePadding: 120
                    }
                }
            });
            
            // Custom Navigation
            $('.carousel-prev').click(function() {
                articlesCarousel.trigger('prev.owl.carousel');
            });
            
            $('.carousel-next').click(function() {
                articlesCarousel.trigger('next.owl.carousel');
            });
        });


  $(document).ready(function(){
            // Initialize carousel only on mobile
            if (window.innerWidth <= 767) {
                $('.services-carousel').owlCarousel({
                    rtl: true,
                    loop: true,
                    margin: 20,
                    nav: false,
                    dots: true,
                    autoplay: true,
                    autoplayTimeout: 4000,
                    autoplayHoverPause: true,
                    responsive: {
                        0: {
                            items: 1
                        },
                        400: {
                            items: 1.5,
                            center: true
                        },
                        576: {
                            items: 2,
                            center: false
                        }
                    }
                });
            }
            
            // Reinitialize on window resize
            let resizeTimer;
            $(window).resize(function() {
                clearTimeout(resizeTimer);
                resizeTimer = setTimeout(function() {
                    if (window.innerWidth <= 767) {
                        if (!$('.services-carousel').hasClass('owl-loaded')) {
                            $('.services-carousel').owlCarousel({
                                rtl: true,
                                loop: true,
                                margin: 20,
                                nav: false,
                                dots: true,
                                autoplay: true,
                                autoplayTimeout: 4000,
                                autoplayHoverPause: true,
                                responsive: {
                                    0: {
                                        items: 1
                                    },
                                    400: {
                                        items: 1.5,
                                        center: true
                                    },
                                    576: {
                                        items: 2,
                                        center: false
                                    }
                                }
                            });
                        }
                    } else {
                        if ($('.services-carousel').hasClass('owl-loaded')) {
                            $('.services-carousel').trigger('destroy.owl.carousel');
                            $('.services-carousel').find('.owl-stage-outer').children().unwrap();
                            $('.services-carousel').removeClass("owl-loaded owl-drag");
                        }
                    }
                }, 250);
            });
        });

         function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        // در انتهای فایل HTML، قبل از تگ بسته </body>

function convertToPersianNumbers() {
    const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    const englishNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    
    function convert(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            let text = node.nodeValue;
            for (let i = 0; i < englishNumbers.length; i++) {
                text = text.replace(new RegExp(englishNumbers[i], 'g'), persianNumbers[i]);
            }
            node.nodeValue = text;
        } else {
            for (let i = 0; i < node.childNodes.length; i++) {
                convert(node.childNodes[i]);
            }
        }
    }
    
    convert(document.body);
}

// اجرای تابع بعد از بارگذاری صفحه
document.addEventListener('DOMContentLoaded', convertToPersianNumbers);
