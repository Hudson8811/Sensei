

windowSize = $(window).width(); 
$(window).on('resize', function(event){
  windowSize = $(window).width(); 
});

$(document).ready(function() {
  
  $(".garanty-btn").click(function(){
    $("#garanty-modal").arcticmodal();
  });
  $(".become-dealer--link").click(function(){
    $("#become-dealer").arcticmodal();
  });
  $(".popular-prod__help-link").click(function(){
    $("#modal-help").arcticmodal();
  });

 
  $(".numbox").mask("+7 (999) 999-99-99");
});
$(".conditioners-types__button").click(function() {
    $(this).toggleClass("open");
    $(".conditioners-types__button .icon").toggleClass("rotate90");
    $(".conditioners-types__list").slideToggle();
  });
  $(".catalog-desc__button").click(function() {
    $(this).toggleClass("open");
    $(this).find('.icon').toggleClass("rotate90");
    $(this).next().slideToggle();
  });
  $(".catalog-item__text-container-button").click(function() {
    $(this).prev().toggleClass("expand");
    $(this).toggleClass("rotate180");
  });
  $(".burger").click(function() {
    $(this).toggleClass("active");
    $(".main-menu").toggleClass("active")
  });
  $(".search__icon:not(.search__icon--close)").click(function() {
    $(this).toggleClass("active");
    $('.search__icon--close').toggleClass("active")
    $(".search").toggleClass("active");
    $(".search__form").toggleClass("active")

   
  });


  $(".search__icon--close").click(function() {
    $(".search__icon").toggleClass("active");
    $(".search").toggleClass("active");
    $(".search__form").toggleClass("active")

   
  });

  $(".about__caption").on('click', function(){

  
  
    if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this).next().removeClass("active");
        
    } else {
      

      $(this).closest(".about__row").find(".about__content.active").removeClass("active");
      $(".about__caption").removeClass("active");
      $(this).addClass("active");
      $(this).next().addClass("active");
    }
    
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
    arrows:false,
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
  $(function(){

    $(".garanty-modal__tabs-list").on("click", ".garanty-modal__tabs-list-item", function(){
  
       var tabs = $(".garanty-modal__tabs-list-item"),
              cont = $(".garanty-modal__tabs-content");
  
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


 

  $(document).ready(function() {
    $('select').niceSelect();
  });