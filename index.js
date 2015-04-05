$(document).ready(function() {

  var i = 50;
  var $columns = $('.column');
  var direction = 'down';

  var pounder = setInterval(function () {

    if (i < 5) {
      direction = 'down';
    }

    if (i > 75) {
      direction = 'up';
    }

    if (direction === 'down') {
      i += 3;
    } else if (direction === 'up') {
      i -= 3;
    }

    console.log(i);

    $columns.css({
      'padding-top' : i + '%'
    });

  }, 15);


});