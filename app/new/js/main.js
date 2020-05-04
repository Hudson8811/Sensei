
//   $(window).on('resize', function () {
//     if ($(window).width() > 1023) {
        
//     } else {
        
//     }
// })
$(".conditioners-types__button").click(function() {
    $(this).toggleClass("open");
    $(".conditioners-types__button .icon").toggleClass("rotate90");
    $(".conditioners-types__list").slideToggle();
  });
  $(".catalog-desc__button").click(function() {
    $(this).toggleClass("open");
    $(".catalog-desc__button .icon").toggleClass("rotate90");
    $(".catalog-desc__row").slideToggle();
  });
  $(".catalog-item__text-container-button").click(function() {
    $(".catalog-item__text").toggleClass("expand");
    $(".catalog-item__text-container-button").toggleClass("rotate180");
  });

  $('.card__slider-img-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.card__slider-img-side'
  });
  $('.card__slider-img-side').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.card__slider-img-main',
    dots: false,
    centerMode: false,
    focusOnSelect: true
  });

  $(function(){

    $(".card__tabs").on("click", ".card__tabs-caption li", function(){
  
       var tabs = $(".card__tabs-caption li"),
              cont = $(".card__tabs-content");
  
         // Удаляем классы active
          tabs.removeClass("active");
         cont.removeClass("active");
         // Добавляем классы active
        $(this).addClass("active");
         cont.eq($(this).index()).addClass("active");
  
        return false;
     });
  });



  $('.press-center__slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  
  var acc = document.getElementsByClassName("card__accordion-title");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      /* Toggle between adding and removing the "active" class,
      to highlight the button that controls the panel */
      this.classList.toggle("active");
  
      /* Toggle between hiding and showing the active panel */
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }

//   $('.card__accordion-title').click(function(e) {
//   	e.preventDefault();
  
//     var $this = $(this);
  
//     if ($this.next().hasClass('active')) {
//         $this.removeClass('active');
//         $this.next().removeClass('active');
//         $this.next().slideUp(350);
//     } else {
//         $this.parent().parent().find('.card__accordion-title').removeClass('active');
//         $this.parent().parent().find('.card__accordion-content').removeClass('active');
//         $this.parent().parent().find('.card__accordion-content').slideUp(350);
//         $this.next().toggleClass('active');
//         $this.next().slideToggle(350);
//     }
// });