$(document).ready(function() {

  startPounding();
  startRotating();

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