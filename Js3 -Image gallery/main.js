$(document).ready(function(){
  $('.image-gallery .thumbnail-image img').on('click',function(){
    
      var mainImageSrc = $('.image-gallery .main-image img')
      if($(this).attr('src')== mainImageSrc.attr('src')){
        return false
      }
      else{
        $(this).css('border','1px solid black');
        var imgsrc = $(this).attr('src');
        var effects = $('#effects').val();
        var duration = $('#duration').val()*1000;
        console.log(effects);
        if(effects=='fade'){
        $('.image-gallery .main-image img').fadeOut(duration, function(){
          $(this).attr('src',imgsrc)
        }).fadeIn(duration);
        }
        if(effects=='slide'){
        $('.image-gallery .main-image img').slideUp(duration, function(){
          $(this).attr('src',imgsrc)
        }).slideDown(duration);          
        }
      }
    
  });
  var zoomIn = $('.image-gallery .main-image img').attr('width');
  console.log(zoomIn);
});