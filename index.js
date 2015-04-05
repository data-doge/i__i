$(document).ready(function() {

  var i = 50;
  var $columns = $('.column');
  var direction = 'down';

  var pounder = setInterval(function () {

    if (i < 1) {
      direction = 'down';
    }

    if (i > 50) {
      direction = 'up';
    }

    if (direction === 'down') {
      i += 10
    } else if (direction === 'up') {
      i -= 1;
    }

    $columns.css({
      'top' : i + '%'
    });

  }, 10);

  var j = 0;
  $typical = $('#typical');

  var rotator = setInterval(function () {
    $typical.css({
      '-webkit-transform' : 'rotate(' + j + 'deg)'
    })
    if (j < 360) {
      j++;
    } else {
      j = 0;
    }
  }, 10);

  var static = $('#static')[0];
  $typical = $('#typical');
  $atypical = $('#atypical');

  var hickoryCountdown = setInterval(function () {

    static.play();
    $typical.hide();
    $atypical.show();

    setTimeout(function() {
      $atypical.hide();
      $typical.show();
      static.pause();
    }, Math.random() * 200);

  }, 15000);



});