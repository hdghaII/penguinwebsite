$(document).ready(function() {
  var targetDate = new Date("June 30, 2023 00:00:00").getTime();

  var interval = setInterval(function() {
    var now = new Date().getTime();
    var distance = targetDate - now;

    // Calculate time units
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update timer
    $("#date").html((days < 10 ? '0' : '')+ days)
    $("#hours").html((hours < 10 ? '0' : '') + hours);
    $("#minutes").html((minutes < 10 ? '0' : '') + minutes);
    $("#seconds").html((seconds < 10 ? '0' : '') + seconds);

    // Stop timer when target date is reached
    if (distance < 0) {
      clearInterval(interval);
      $("#timer").html("EXPIRED");
    }
  }, 1000);

  $('.sixth__menu--itemlb').on('click', function() {

    if( !$(this).hasClass('active') ) {
       $(this).addClass('active');
       $(this).find('.sixth__itemlb--img').html('-');
    } else {
      $(this).removeClass('active');
      $(this).find('.sixth__itemlb--img').html('+');
      console.log('.sixth__itemlb--img');
    }

  })
  $('.header__burger').on('click', function() {

    if( !$('.menu').hasClass('active') ) {
       $('.menu').addClass('active');
       $('body').addClass('no-scroll');
       $('html').addClass('no-scroll');
       $('.header__burger').addClass('active');
    } else {
      $('.menu').removeClass('active');
      $('body').removeClass('no-scroll');
      $('html').removeClass('no-scroll');
      $('.header__burger').removeClass('active');
      $('.menu').find('.sixth__itemlb--img').html('+');
    }

  })
  
  
});