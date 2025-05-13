
// Mobile Menu Toggle Functionality
// Dynamic Mega Menu JavaScript
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
  $(".baner-prev").click(function () {
    $("#baner-owl").trigger("prev.owl.carousel");
  });
  
  $(".baner-next").click(function () {
    $("#baner-owl").trigger("next.owl.carousel");
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


document.addEventListener('DOMContentLoaded', convertToPersianNumbers);

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
    
    $('.mobile-category-item > a').on('click', function(e) {
        e.preventDefault();
        const $parent = $(this).parent();
        const $submenu = $parent.find('.mobile-submenu');
        
        if ($submenu.length) {
            if ($submenu.is(':visible')) {
                $submenu.slideUp(300);
                $parent.removeClass('active');
                $(this).find('.dropdown-indicator i').removeClass('fa-chevron-up').addClass('fa-chevron-down');
            } else {
                $submenu.slideDown(300);
                $parent.addClass('active');
                $(this).find('.dropdown-indicator i').removeClass('fa-chevron-down').addClass('fa-chevron-up');
            }
        }
    });
    
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


    $(document).ready(function () {
       if (window.innerWidth> 992){
        var $logo = $('.site-logo');
        

        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 100) {
                $logo.addClass('shrink');
                $('.top-header').addClass('header-shrink')
                $('.header-back').addClass('header-back-shrink')
                
            } else {
                $logo.removeClass('shrink');
                $('.top-header').removeClass('header-shrink')
                $('.header-back').removeClass('header-back-shrink')
            }
        });
       }
    });



