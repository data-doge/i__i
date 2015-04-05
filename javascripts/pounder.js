function startPounding () {

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
      i += 10;
    }

    if (direction === 'up') {
      i -= 1;
    }

    $columns.css({
      'top' : i + '%'
    });

  }, 10);

}