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

  var $thought = $('h1');
  var static = $('#static')[0];
  $typical = $('#typical');
  $atypical = $('#atypical');
  var thoughts = [
    "______________",
    "am mechanical",
    "am curved glass",
    "am tip knitted",
    "am fish eggs",
    "am so tired",
    "am I-5 petrol",
    "am somehow",
    "am somewhere"
  ];

  var hickoryCountdown = setInterval(function () {

    static.play();
    $typical.hide();
    $atypical.show();

    setTimeout(function() {
      $atypical.hide();
      $typical.show();
      static.pause();
    }, Math.random() * 420);

    $thought.text(thoughts[Math.floor(Math.random() * thoughts.length)]);

  }, 10000);



});