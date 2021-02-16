$(document).ready(function (){
  $('li').hide()
  
  $('.navbtn').on('click', function(){
    $('li').toggle('slow');
   
  })
 
})