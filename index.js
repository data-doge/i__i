$(document).ready(function() {

  var i = 0;
  var $divs = $('div');
  var direction = 'down';

  var pounder = setInterval(function () {

    if (i === 0) {
      direction = 'down';
    }

    if (i === 100) {
      direction = 'up';
    }

    if (direction === 'down') {
      i++;
    } else if (direction === 'up') {
      i--;
    }

    console.log(i);

    $divs.css({
      'top' : i + '%'
    });

  }, 10);


});