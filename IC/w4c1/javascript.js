/**
 * Created by cteeters on 9/14/2015.
 */
$(document).ready(function(){
  $('div').click(function(){
    $(this).toggleClass('clicked');
  });
  $('div').mouseenter(function(){
    $(this).fadeTo(200, 0.5);
  });
  $('div').mouseleave(function(){
    $(this).fadeTo(200, 1);
  });
});