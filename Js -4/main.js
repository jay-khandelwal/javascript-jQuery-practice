$(document).ready(function (){

  $('.box').on({
    'mouseover':function(){
    $(this).css({
      backgroundColor: 'tomato',
      borderRadius:'5px'
    });
    },
  
  'mouseout':function(){
    $(this).css({
      backgroundColor: 'white',
      borderRadius:'5px'
    });
  },
  });
  
  $('button').click(function(){
    var a = $('.box').html();
    $('.test').html(a);
    $('.box').toggleClass('cool');
  });
  
  
  
});