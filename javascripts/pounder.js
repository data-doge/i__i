function startPounding (time) {
  var i = 50;
  var direction = 'down';
  var pounder = setInterval(function () {
    if (i < 1) {
      direction = 'down';
    }
    if (i > 50) {
      direction = 'up';
    }
    direction === 'down' ? i += 10 : i -= 1;
    $('.column').css('top', i + '%');
  }, time);
}