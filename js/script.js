$(document).ready(function(){
  
  $('.menu ul li').mouseover(function(){
    $(this).find('ul').css("display","inline-block");

  });
  $('.menu ul li').mouseout(function(){
    $(this).find('ul').css("display","none");

  });

});
