
$(document).ready(function(){
  $("#anim").click(function(){
    $("#ani").animate({
    left:'250px',
    height:'+=150px',
    width: '+=150px',
    opacity: '0.5'
  });

  });
  $("#speed").click(function(){
    $("#signa").animate({
    left:'250px',
    height:'+=100px',
    width: '+=100px',
    opacity: '0.5'
  },
5000);
  });

  $("#STOP").click(function(){
    $("#signa").stop();
  });

});