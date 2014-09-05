$(document).ready(function(){
  slideShow();
})

function slideShow() {
  var showing = $('#slider .is-showing');
  var next = showing.next().length ? showing.next(): showing.parent().children(':first');


showing.fadeOut(800, function(){
  next.fadeIn(800).addClass('is-showing');
}).removeClass('is-showing');
setTimeout(slideShow, 5500);
} 