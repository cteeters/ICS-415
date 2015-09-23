/**
 * Created by cteeters on 9/21/2015.
 */
$(document).ready(function(){
  $("#box").mouseenter(function(){
    $(this).fadeTo("slow", 0.5);
  });
  $("#box").mouseleave(function(){
    $(this).fadeTo("fast", 1.0);
  });
  $("#box2").click(function(){
    $(this).css("background-color", "orange");
    $("#panel").slideDown("slow");
  });
  $("#box3").click(function(){
    $(this.firstElementChild).append("<li>Thing 4</li>");
    $("#new").load("demo.txt");
  });
});