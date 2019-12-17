
var nosotros;
var contacto;


window.onload = function(){
  nosotros= $('#nosotros').offset().top;
  contacto= $('#contacto').offset().top;
};

$('.btn-nosotros').on('click', function(e){
  e.preventDefault();
  $('html, body').animate({
      scrollTop: nosotros
/*tiempo que tarda la animación --> */    }, 800);
});

$('.btn-contacto').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: contacto
  /*tiempo que tarda la animación --> */    }, 900);
  });
