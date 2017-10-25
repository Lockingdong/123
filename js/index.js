var clientHeight = document.body.clientHeight || document.documentElement.clientHeight;
var clientWidth = document.body.clientWidth || document.documentElement.clientWidth;
$('.cardBottom').mousemove(function(ev){
  $('.card').removeClass('restore')
  var oEvent = ev || event;
  
  var cardWidth = parseInt($(this).css('width'));
  var cardHeight = parseInt($(this).css('height'));
  
  var cardLeft = parseInt($(this).css('left'));
  var cardTop = parseInt($(this).css('top'));
  
  var centerDisX = oEvent.clientX - cardLeft; 
  var centerDisY = oEvent.clientY - cardTop;
  
  //$('.txt').val(centerDisX + ", "+ centerDisY);
  var degX = (Math.abs(centerDisY) / (cardHeight/2)) * 10;
  var degY = (Math.abs(centerDisX) / (cardWidth/2)) * 10;
  //$('.txt').val(degX + ", "+ degY);
  
  if(centerDisY < 0 && centerDisX < 0){
     $('.card').css({'transform' : 'translate(-50%, -50%) rotateX('+degX+'deg) rotateY(-'+degY+'deg)'});
  }
   if(centerDisY < 0 && centerDisX > 0){
     $('.card').css({'transform' : 'translate(-50%, -50%) rotateX('+degX+'deg) rotateY('+degY+'deg)'});
  }
   if(centerDisY > 0 && centerDisX < 0){
     $('.card').css({'transform' : 'translate(-50%, -50%) rotateX(-'+degX+'deg) rotateY(-'+degY+'deg)'});
  }
   if(centerDisY > 0 && centerDisX > 0){
     $('.card').css({'transform' : 'translate(-50%, -50%) rotateX(-'+degX+'deg) rotateY('+degY+'deg)'});
  }
  
  
});
$('.cardBottom').mouseleave(function(){   
    $('.card').addClass('restore');
});