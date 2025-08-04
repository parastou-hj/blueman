

$(document).ready(function() {
    // Set default active category (first one)
    const defaultCategory = $('.category-item').first().data('category');
    $('.category-item').first().addClass('active');
    $(`#${defaultCategory}-content`).addClass('active');
    
    // Category hover/click behavior
    $('.category-item').on('mouseenter', function() {
        // Desktop behavior (hover)
        if (window.innerWidth > 991) {
            const categoryId = $(this).data('category');
            
            // Remove active class from all categories and contents
            $('.category-item').removeClass('active');
            $('.subcategory-content').removeClass('active');
            
            // Add active class to current category and content
            $(this).addClass('active');
            $(`#${categoryId}-content`).addClass('active');
        }
    });
    
    // Mobile category click behavior
    $('.category-item').on('click', function(e) {
        if (window.innerWidth <= 991) {
            e.preventDefault();
            const categoryId = $(this).data('category');
            
            // Toggle active classes
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(`#${categoryId}-content`).removeClass('active');
            } else {
                $('.category-item').removeClass('active');
                $('.subcategory-content').removeClass('active');
                
                $(this).addClass('active');
                $(`#${categoryId}-content`).addClass('active');
            }
        }
    });
    
    // Keep menu open when interacting with subcategories
    $('.subcategory-content').on('mouseenter', function() {
        if (window.innerWidth > 991) {
            $(this).addClass('active');
        }
    });
    
    // Mobile menu toggle for main mega menu
    $('.has-megamenu > .nav-link').on('click', function(e) {
        if (window.innerWidth <= 991) {
            e.preventDefault();
            const parent = $(this).parent();
            
            // Toggle active class
            parent.toggleClass('active');
            
            // Show/hide megamenu container
            if (parent.hasClass('active')) {
                parent.find('.megamenu-container').slideDown(300);
            } else {
                parent.find('.megamenu-container').slideUp(300);
            }
        }
    });
    
    // Prevent menu from closing when clicking inside it
    $('.megamenu-container').on('click', function(e) {
        e.stopPropagation();
    });
    
    // Handle window resize
    $(window).on('resize', function() {
        if (window.innerWidth > 991) {
            // Reset for desktop
            $('.megamenu-container').css('display', '');
            
            // Make sure default category is set
            if (!$('.category-item.active').length) {
                $('.category-item').first().addClass('active');
                const defaultCategory = $('.category-item').first().data('category');
                $(`#${defaultCategory}-content`).addClass('active');
            }
        }
    });
    
    // Function to load categories dynamically (for future implementation)
    function loadDynamicCategories() {
        // Example API endpoint
        // $.ajax({
        //     url: 'api/categories',
        //     method: 'GET',
        //     dataType: 'json',
        //     success: function(response) {
        //         if (response && response.categories) {
        //             let categoriesHtml = '';
        //             
        //             // Generate categories
        //             response.categories.forEach(function(category) {
        //                 categoriesHtml += `<li class="category-item" data-category="${category.id}"><a href="${category.url}">${category.name}</a></li>`;
        //                 
        //                 // Generate subcategories for each category
        //                 let subcategoriesHtml = `
        //                     <div class="subcategory-content" id="${category.id}-content">
        //                         <h3 class="megamenu-title">${category.name}</h3>
        //                         <ul class="megamenu-list subcategory-list">`;
        //                 
        //                 category.subcategories.forEach(function(subcategory) {
        //                     subcategoriesHtml += `<li><a href="${subcategory.url}">${subcategory.name}</a></li>`;
        //                 });
        //                 
        //                 subcategoriesHtml += `
        //                         </ul>
        //                         <a href="${category.url}" class="view-all-link">مشاهده همه ${category.name} <i class="fa fa-angle-left"></i></a>
        //                     </div>`;
        //                 
        //                 // Add subcategory content to subcategories column
        //                 $('.subcategories-column').append(subcategoriesHtml);
        //             });
        //             
        //             // Update categories list
        //             $('.categories-list').html(categoriesHtml);
        //             
        //             // Set first category as active
        //             $('.category-item').first().addClass('active');
        //             const defaultCategory = $('.category-item').first().data('category');
        //             $(`#${defaultCategory}-content`).addClass('active');
        //             
        //             // Rebind event handlers
        //             bindCategoryEvents();
        //         }
        //     },
        //     error: function(error) {
        //         console.log('Error loading categories', error);
        //     }
        // });
    }
    
    // Function to bind category events (useful after dynamic loading)
    function bindCategoryEvents() {
        // Reset existing events
        $('.category-item').off('mouseenter click');
        
        // Rebind hover event
        $('.category-item').on('mouseenter', function() {
            if (window.innerWidth > 991) {
                const categoryId = $(this).data('category');
                
                $('.category-item').removeClass('active');
                $('.subcategory-content').removeClass('active');
                
                $(this).addClass('active');
                $(`#${categoryId}-content`).addClass('active');
            }
        });
        
        // Rebind click event for mobile
        $('.category-item').on('click', function(e) {
            if (window.innerWidth <= 991) {
                e.preventDefault();
                const categoryId = $(this).data('category');
                
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active');
                    $(`#${categoryId}-content`).removeClass('active');
                } else {
                    $('.category-item').removeClass('active');
                    $('.subcategory-content').removeClass('active');
                    
                    $(this).addClass('active');
                    $(`#${categoryId}-content`).addClass('active');
                }
            }
        });
    }
    
    // Uncomment to enable dynamic loading
    // loadDynamicCategories();
});




  $(".baner-prev").click(function () {
    $("#baner-owl").trigger("prev.owl.carousel");
  });
  
  $(".baner-next").click(function () {
    $("#baner-owl").trigger("next.owl.carousel");
  });


  $(function () {
    $("#baner-owl-two").owlCarousel({
      rtl: false,
      items: 1,
      // nav: true,
      dots: true,
    //   loop: true,
    //   autoplay: true,
      autoplayTimeout: 6000,
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
                        items: 2
                    },
                    576: {
                        items: 2
                    },
                    768: {
                        items: 3.5
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
                margin: 10,
                nav: true,
                dots: true,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
                smartSpeed: 1000,
                responsive: {
                    0: {
                        items:3
                    },
                    576: {
                        items: 4
                    },
                    768: {
                        items: 5
                    },
                    992: {
                        items: 6
                    },
                    1200: {
                        items: 7
                    },
                    
                }
            });
        });


    
 
        $(document).ready(function(){
            var articlesCarousel = $('.articles-carousel').owlCarousel({
                rtl: true,
                loop: true,
                // margin: 20,
                nav: false,
                dots: false,
                center: true,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                smartSpeed: 1000,
                stagePadding: 100,
                responsive: {
                    0: {
                        items: 1.2,
                        stagePadding: 30
                    },
                    576: {
                        items: 1.5,
                        stagePadding: 50
                    },
                    768: {
                        items: 1.8,
                        stagePadding: 70
                    },
                    992: {
                        items: 2.7,
                        stagePadding: 70
                    },
                    1200: {
                        items: 3,
                        stagePadding: 100
                    },
                    1400: {
                        items: 3,
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


//   $(document).ready(function(){
//             // Initialize carousel only on mobile
//             if (window.innerWidth <= 767) {
//                 $('.services-carousel').owlCarousel({
//                     rtl: true,
//                     loop: true,
//                     margin: 20,
//                     nav: false,
//                     dots: true,
//                     autoplay: true,
//                     autoplayTimeout: 4000,
//                     autoplayHoverPause: true,
//                     responsive: {
//                         0: {
//                             items: 1
//                         },
//                         400: {
//                             items: 1.5,
//                             center: true
//                         },
//                         576: {
//                             items: 2,
//                             center: false
//                         }
//                     }
//                 });
//             }
            
//             // Reinitialize on window resize
//             let resizeTimer;
//             $(window).resize(function() {
//                 clearTimeout(resizeTimer);
//                 resizeTimer = setTimeout(function() {
//                     if (window.innerWidth <= 767) {
//                         if (!$('.services-carousel').hasClass('owl-loaded')) {
//                             $('.services-carousel').owlCarousel({
//                                 rtl: true,
//                                 loop: true,
//                                 margin: 20,
//                                 nav: false,
//                                 dots: true,
//                                 autoplay: true,
//                                 autoplayTimeout: 4000,
//                                 autoplayHoverPause: true,
//                                 responsive: {
//                                     0: {
//                                         items: 1
//                                     },
//                                     400: {
//                                         items: 1.5,
//                                         center: true
//                                     },
//                                     576: {
//                                         items: 2,
//                                         center: false
//                                     }
//                                 }
//                             });
//                         }
//                     } else {
//                         if ($('.services-carousel').hasClass('owl-loaded')) {
//                             $('.services-carousel').trigger('destroy.owl.carousel');
//                             $('.services-carousel').find('.owl-stage-outer').children().unwrap();
//                             $('.services-carousel').removeClass("owl-loaded owl-drag");
//                         }
//                     }
//                 }, 250);
//             });
//         });

         function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

  



$(document).ready(function() {
    $('.mobile-menu-toggle').on('click', function() {
        $('.mobile-side-menu').addClass('active');
        $('.mobile-menu-overlay').addClass('active');
        $('body').addClass('menu-open');
    });
    
    $('.mobile-menu-close, .mobile-menu-overlay').on('click', function() {
        $('.mobile-side-menu').removeClass('active');
        $('.mobile-menu-overlay').removeClass('active');
        $('body').removeClass('menu-open');
    });
    
    $('.mobile-side-menu .nav-item.has-megamenu > .nav-link').on('click', function(e) {
        e.preventDefault();
        $(this).parent().toggleClass('active');
        $(this).find('.dropdown-indicator i').toggleClass('fa-chevron-down fa-chevron-up');
    });
    
    // $('.mobile-category-item > a').on('click', function(e) {
    //     e.preventDefault();
    //     const $parent = $(this).parent();
    //     const $submenu = $parent.find('.mobile-submenu');
        
    //     if ($submenu.length) {
    //         if ($submenu.is(':visible')) {
    //             $submenu.slideUp(300);
    //             $parent.removeClass('active');
    //             $(this).find('.dropdown-indicator i').removeClass('fa-chevron-up').addClass('fa-chevron-down');
    //         } else {
    //             $submenu.slideDown(300);
    //             $parent.addClass('active');
    //             $(this).find('.dropdown-indicator i').removeClass('fa-chevron-down').addClass('fa-chevron-up');
    //         }
    //     }
    // });
    
    $(window).on('resize', function() {
        if (window.innerWidth > 991) {
            $('.mobile-side-menu').removeClass('active');
            $('.mobile-menu-overlay').removeClass('active');
            $('body').removeClass('menu-open');
        }
    });
    
    // 6. انیمیشن آیکون منوی موبایل
    $('.mobile-menu-toggle').on('click', function() {
        $(this).toggleClass('active');
    });
});

/* JavaScript for Footer Accordion Functionality */
$(document).ready(function() {
  // First, add special wrapper classes to Contact and Social sections
  // This allows us to target them specifically in CSS
  $('.footer-column.large').each(function() {
    if ($(this).find('.contact-column').length) {
      $(this).addClass('contact-column-wrapper');
    }
    if ($(this).find('.social-column').length) {
      $(this).addClass('social-column-wrapper');
    }
  });
  
  // Only apply accordion behavior below 992px
  function setupFooterAccordion() {
    if (window.innerWidth < 992) {
      // Remove any existing event listeners first
      $('.footer-column:not(.contact-column-wrapper):not(.social-column-wrapper) h3').off('click');
      
      // Add click event to footer column headings (excluding contact and social)
      $('.footer-column:not(.contact-column-wrapper):not(.social-column-wrapper) h3').on('click', function() {
        const column = $(this).parent('.footer-column');
        
        // If this column is already active, just close it
        if (column.hasClass('active')) {
          column.removeClass('active');
          column.find('ul').slideUp(300);
          return;
        }
        
        // Close all other columns (excluding contact and social)
        $('.footer-column:not(.contact-column-wrapper):not(.social-column-wrapper)').removeClass('active');
        $('.footer-column:not(.contact-column-wrapper):not(.social-column-wrapper) ul').slideUp(300);
        
        // Open this column
        column.addClass('active');
        column.find('ul').slideDown(300);
      });
      
      // Close all regular columns initially
      $('.footer-column:not(.contact-column-wrapper):not(.social-column-wrapper) ul').hide();
      
    } else {
      // Remove accordion behavior for desktop
      $('.footer-column h3').off('click');
      $('.footer-column').removeClass('active');
      $('.footer-column ul').show();
    }
  }
  
  // Initial setup
  setupFooterAccordion();
  
  // Update on window resize
  let resizeTimer;
  $(window).on('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      setupFooterAccordion();
    }, 250);
  });
});


$(document).ready(function() {
    const initializeOwlCarousel = () => {
        const advantagesContainer=$('.services-grid')
        if (window.innerWidth > 768) {
            if (typeof advantagesContainer.data('owl.carousel') != 'undefined') {
                advantagesContainer.data('owl.carousel').destroy();
              }
              advantagesContainer.removeClass('owl-carousel');
            
        } else if(window.innerWidth <= 768) {
            if (!$('.services-grid').hasClass('owl-carousel')) {
                $('.services-grid').addClass('owl-carousel').owlCarousel({
                    rtl: true,
                    items: 1,
                    
                    dots: true,
                    loop: true,
                    // autoplay: true,
                    // autoplayTimeout: 3000,
                    // autoplayHoverPause: true,
                    responsive: {
                        0: {
                            items: 3
                        },
                        480: {
                            items: 3.5
                        },
                        576: {
                            items: 4
                        },
                        768: {
                            items: 5
                        },
                        1200: {
                            items: 6
                        },
                        
                    }
                });
            }
        }
    };

    initializeOwlCarousel();
    $(window).resize(initializeOwlCarousel);

  
});



$(document).ready(function() {
  
   if(window.innerWidth >992){
     // Scroll event handler
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 30) {
            $('body').addClass('header-scroll-active');
        } else {
            $('body').removeClass('header-scroll-active');
        }
    });
    
    // Initial check (in case page loads with scroll already past threshold)
    if ($(window).scrollTop() > 30) {
        $('body').addClass('header-scroll-active');
    }

   }
});

//----------------------video-modal
$(document).ready(function () {
    const modal = $(".video-modal");
    const video = $("#myVideo")[0];
  
    $(".circular-image").click(function () {
      modal.fadeIn();
      video.play();
    });
  
    $(".close-modal, .modal-overlay").click(function () {
      modal.fadeOut();
      video.pause();
      video.currentTime = 0;
    });
  
    $(".modal-content video").click(function (e) {
      e.stopPropagation();
    });
  });
  




$(document).ready(function() {
    const $bannerOwlTwo = $('#baner-owl-two');

    if (!$bannerOwlTwo.length) {
        return;
    }

    $bannerOwlTwo.find('.motion-baner-item').addClass('animation-ready');

    function triggerActiveSlideAnimation(carouselInstance, debugSource = "unknown") {
     
        const delay = (debugSource === 'IntersectionObserver_init' || debugSource === 'initialized_in_viewport') ? 100 : 50;

        setTimeout(function() {
            // console.log(`Triggering animation for ${debugSource} with delay ${delay}ms`);
            carouselInstance.find('.owl-item').removeClass('animate');
            carouselInstance.find('.owl-item.active').addClass('animate');
        }, delay);
    }

    // 3. مقداردهی اولیه Owl Carousel
    $bannerOwlTwo.owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: true,
     
        onInitialized: function(event) { 
        }
    });
    


    // 4. اتصال رویداد 'translated' برای انیمیشن اسلایدهای بعدی
    $bannerOwlTwo.on('translated.owl.carousel', function(event) { 
      
        triggerActiveSlideAnimation($(this), 'translated');
    });

    if ('IntersectionObserver' in window) {
        const carouselObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if ($bannerOwlTwo.data('owl.carousel')) {
                         triggerActiveSlideAnimation($bannerOwlTwo, 'IntersectionObserver_init');
                    } else {
                        
                        $bannerOwlTwo.one('initialized.owl.carousel', function() { 
                            
                            triggerActiveSlideAnimation($bannerOwlTwo, 'IntersectionObserver_init_after_owl_init');
                        });
                    }
                    observer.unobserve($bannerOwlTwo[0]); 
                }
            });
        }, {
            threshold: 0.2, 
            rootMargin: "0px 0px -50px 0px"
        });
        carouselObserver.observe($bannerOwlTwo[0]);
    } else {
       
        function initialAnimationFallback() {
            const rect = $bannerOwlTwo[0].getBoundingClientRect();
            const isInViewport = rect.top < window.innerHeight && rect.bottom >= 0 &&
                                 rect.left < window.innerWidth && rect.right >= 0;
            if (isInViewport) {
                triggerActiveSlideAnimation($bannerOwlTwo, 'initialized_in_viewport');
            } else {
               
            }
        }

        if ($bannerOwlTwo.data('owl.carousel')) { 
            initialAnimationFallback();
        } else { 
            $bannerOwlTwo.one('initialized.owl.carousel', function(event) {
               
                initialAnimationFallback();
            });
        }
    }
});

$(document).ready(function() {
    // تنظیمات owl carousel
    $("#baner-owl").owlCarousel({
        rtl: true,
        items: 1,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 6000, 
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
        },
        onTranslated: function() {
            $('.baner-buble, .baner-txt').css({
                'animation': 'none',
                'opacity': '0'
            });
            
            $('.owl-item.active .baner-item').width();
            
            $('.owl-item.active .baner-buble, .owl-item.active .baner-txt').removeAttr('style');
        }
    });
});

$(document).ready(function() {
    const banerItems = $('#baner-owl .baner-item');
    
    banerItems.each(function() {
        const item = $(this);
        const txt = item.find('.baner-txt');
        const bubbles = item.find('.baner-buble');
        
        // Mouse enter event - prepare for hover animations
        item.on('mouseenter', function() {
            txt.css('transition', 'transform 0.1s ease-out');
            bubbles.css('transition', 'transform 0.2s ease-out');
        });
        
        // Mouse move event - apply the parallax effect
        item.on('mousemove', function(e) {
            // Calculate mouse position relative to the item
            const rect = this.getBoundingClientRect();
            const mouseX = e.clientX - rect.left; // X position within the element
            const mouseY = e.clientY - rect.top;  // Y position within the element
            
            // Calculate percentage position (-50 to 50 for a moderate effect)
            const xPercent = ((mouseX / rect.width) - 0.5) * 100;
            const yPercent = ((mouseY / rect.height) - 0.5) * 100;
            
            // Apply transform to text - subtle movement opposite to mouse direction
            txt.css('transform', `translate(${-xPercent * 0.5}px, ${-yPercent * 0.3}px)`);
            
            // Apply transform to each bubble - more dramatic movement
            bubbles.each(function(index) {
                // Make each bubble move slightly differently for a more dynamic effect
                const factor = 1 + (index * 0.3);
                $(this).css('transform', `translate(${xPercent * factor}px, ${yPercent * factor}px)`);
            });
        });
        
        // Mouse leave event - reset positions smoothly
        item.on('mouseleave', function() {
            txt.css('transition', 'transform 0.5s ease-out');
            bubbles.css('transition', 'transform 0.5s ease-out');
            txt.css('transform', 'translate(0, 0)');
            bubbles.css('transform', 'translate(0, 0)');
        });
    });
});

$(document).ready(function() {
    // --- آکاردئون سطح اول (برای .nav-item ها) ---
    $('.nav-menu .nav-item.has-submenu > .nav-link').on('click', function(e) {
        // اگر لینک واقعاً به جایی می‌رود و فقط برای باز/بسته کردن نیست، e.preventDefault() نزنید.
        // اگر لینک فقط برای toggle است، e.preventDefault() لازم است.
        // در مثال HTML بالا، لینک های اصلی nav-item به "#" یا یک URL واقعی می‌روند.
        // اگر خود لینک عملکردی ندارد و فقط برای باز کردن است:
        if ($(this).attr('href') === '#') { // یا یک شرط دیگر برای تشخیص لینک‌های صرفاً toggle
             e.preventDefault();
        }

        let $parentNavItem = $(this).closest('.nav-item.has-submenu');
        let $submenu = $parentNavItem.find('> .nav-item-submenu'); // فقط زیرمنوی مستقیم

        // اگر می‌خواهید فقط یک آکاردئون در این سطح باز بماند:
        // $parentNavItem.siblings('.has-submenu.active-accordion').removeClass('active-accordion').find('> .nav-item-submenu').slideUp();

        $parentNavItem.toggleClass('active-accordion');
        $submenu.slideToggle(); // انیمیشن باز و بسته شدن
    });

    // --- آکاردئون سطح دوم (برای .mobile-category-item ها داخل دسته‌بندی محصولات) ---
    // این کد احتمالاً شبیه کدی است که از قبل برای دسته‌بندی‌ها داشتید.
    $('.mobile-categories-list .mobile-category-item > a').on('click', function(e) {
        // مشابه بالا، اگر لینک فقط برای toggle است:
        if ($(this).attr('href') === '#') {
            e.preventDefault();
        }

        let $parentCategoryItem = $(this).closest('.mobile-category-item');
        let $categorySubmenu = $parentCategoryItem.find('> .mobile-submenu');

        // اگر می‌خواهید فقط یک دسته‌بندی در این سطح باز بماند:
        // $parentCategoryItem.siblings('.active').removeClass('active').find('> .mobile-submenu').slideUp();
        // $parentCategoryItem.siblings().find('.mobile-submenu').slideUp();
        // $parentCategoryItem.siblings().removeClass('active'); // 'active' کلاس CSS شما برای آیتم باز


        $parentCategoryItem.toggleClass('active'); // کلاس 'active' برای استایل دهی (مثلاً چرخش آیکون)
        $categorySubmenu.slideToggle();

        // اعمال انیمیشن آیتم‌های زیرمنو (اگر هنوز لازم است)
        if ($parentCategoryItem.hasClass('active')) {
            $categorySubmenu.find('.mobile-subcategory-list li').each(function(index) {
                $(this).css('--item-index', index + 1); // برای انیمیشن staggered
            });
        }
    });

    // کد مربوط به باز و بسته شدن منوی اصلی موبایل
    // $('.mobile-menu-toggle').on('click', function() { ... });
    // $('.mobile-menu-close').on('click', function() { ... });

});