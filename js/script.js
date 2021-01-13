  
$(document).ready(function(){
  
  $('.menu ul li').mouseover(function(){
    $(this).find('>ul').stop(true).slideDown();

  });
  $('.menu ul li').mouseout(function(){
    $(this).find('>ul').slideUp();

  });
  $('.menu ul li').click(function(){
    $('.menu ul li.active').removeClass("active");
    $(this).addClass("active");

  });
 
});
