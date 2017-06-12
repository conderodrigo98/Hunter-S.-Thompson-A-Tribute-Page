$(document).ready(function(){
  $(".imgIntro").mouseover(function(){
     $(".quote").css("display","block").addClass("animated fadeInUp");
  });
  
  $("#cover1").mouseover(function(){
     $("#cover1").addClass("animated shake");
  });
  $("#cover1").mouseleave(function(){
     $("#cover1").removeClass("animated shake");
  });
  
  $("#cover2").mouseover(function(){
     $("#cover2").addClass("animated shake");
  });
  $("#cover2").mouseleave(function(){
     $("#cover2").removeClass("animated shake");
  });
  
  $("#cover3").mouseover(function(){
     $("#cover3").addClass("animated shake");
  });
  $("#cover3").mouseleave(function(){
     $("#cover3").removeClass("animated shake");
  });
   
});