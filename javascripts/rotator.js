function startRotating () {
  var j = 0;
  var rotator = setInterval(function () {
    $('#typical').css('-webkit-transform', 'rotate(' + j + 'deg)');
    j < 360 ? j++ : j = 0;
  }, 10);
}