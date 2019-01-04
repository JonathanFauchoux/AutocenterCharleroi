$(document).ready(function() {
    $(window).scroll(function() {// checks if window is scrolled more than 500px, adds/removes solid class
      if($(this).scrollTop() > 20) { 
          $('.navglobal').addClass('solid');
          $('.collapse').addClass('solid');
      } else {
          $('.navglobal').removeClass('solid');
          $('.collapse').removeClass('solid');
      }
    });    
});

// scroll down occasion
$('a[href="#down"]').click(function(){
    $('html, body').animate({scrollTop:810}, '2000');
});

// scroll down tarifs
$('a[href="#scroll_down1"]').click(function(){
    $('html, body').animate({scrollTop:1180},'slow');
});

// scroll down2 tarifs
$('a[href="#scroll_down2"]').click(function(){
    $('html, body').animate({scrollTop:1830},'slow');
});

// scroll down3 tarifs
$('a[href="#scroll_down3"]').click(function(){
    $('html, body').animate({scrollTop:2510},'slow');
});
    
// Toggle


$('.button-read-less').click(function () {
    $(".more").fadeToggle('slow');
    $('.button-read-less').toggleClass("red");   
});
$('.button-read-less2').click(function () {
    $(".more2").fadeToggle('slow');
     $('.button-read-less2').toggleClass("red");    
});
$('.button-read-less3').click(function () {
    $(".more3").fadeToggle('slow');
     $('.button-read-less3').toggleClass("red");    
});
    
