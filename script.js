$(document).ready(function () {
    // Initialize Swiper
    var swiperSlideHero = new Swiper("#slide-hero .mySwiper", {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    })

    var swiperSlideReason = new Swiper("#slide-reason .mySwiper", {
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            320: {
                centeredSlides: false,
                slidesPerView: 1,
                spaceBetween: 0,
            },
            768: {
                centeredSlides: true,
                slidesPerView: 2.5,
                spaceBetween: 0,
            },
            1024: {
                centeredSlides: true,
                slidesPerView: 3,
                spaceBetween: 5,
            }
        }
    })

    var swiperSlideFeedback = new Swiper("#slide-feedback .mySwiper", {
        loop: true,
        navigation: {
            nextEl: "#slide-feedback .swiper-button-next",
            prevEl: "#slide-feedback .swiper-button-prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 1.5,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        }
    })
    var swiperSlidePartner = new Swiper("#slide-partner .mySwiper", {
        loop: true,
        navigation: {
            nextEl: "#slide-partner .swiper-button-next",
            prevEl: "#slide-partner .swiper-button-prev",
        },
        autoplay: {
            delay: 2000,
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 20,
            }
        }
    })

    const header = $("#header");
    const sticky = header.offset().top;

    $(window).scroll(function () {
        if (window.scrollY > sticky) {
            header.addClass("sticky");
        } else {
            header.removeClass("sticky");
        }
    })

    const bars = $('.bars')
    const navbars = $('.nav-bar .bars')
    bars.click(function () {
        $('.nav-bar').addClass('show')
    })
    navbars.click(function () {
        $('.nav-bar').removeClass('show')
    })

    const navBarSearchSvg = $('.nav-bar .search .icon-search-svg')
    navBarSearchSvg.click(function () {
        $('.nav-bar .search').addClass('show-icon')
        $('.nav-bar .search-info').addClass('show')
    })
    const navBarSearchFa = $('.nav-bar .search .icon-search-fa')
    navBarSearchFa.click(function () {
        $('.nav-bar .search').removeClass('show-icon')
        $('.nav-bar .search-info').removeClass('show')
    })

})