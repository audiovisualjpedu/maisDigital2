$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#btn-top').addClass('show');
    } else {
      $('#btn-top').removeClass('show');
    }
  });

  $('#btn-top').click(function() {
    $('html, body').animate({scrollTop : 0},400);
    return false;
  });
});
