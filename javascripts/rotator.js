function startRotating () {

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

}