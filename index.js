$(document).ready(function() {

  var i = 50;
  var $columns = $('.column');
  var direction = 'down';

  var pounder = setInterval(function () {

    if (i < 5) {
      direction = 'down';
    }

    if (i > 45) {
      direction = 'up';
    }

    if (direction === 'down') {
      i += 20;
    } else if (direction === 'up') {
      i -= 3;
    }

    $columns.css({
      'top' : i + '%'
    });

  }, 35);


});