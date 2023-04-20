$(document).ready(function() {
  var targetDate = new Date("April 30, 2023 00:00:00").getTime();

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

  var today = new Date();
  var date = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();
  $("#date").html(date);
});