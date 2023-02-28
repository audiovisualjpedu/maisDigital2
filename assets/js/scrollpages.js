$(document).ready(function() {
  // anima a rolagem da página quando um link do menu é clicado
  $('a[href^="#"]').on('click', function(event) {
    event.preventDefault();
    var target = $(this.hash);
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 500);
    }
  });
});
