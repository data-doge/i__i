function startHickoryCountdown () {

  var hickoryCountdown = setInterval(function () {
    showerTime();
    setTimeout(function() {
      screamHickory();
    }, Math.random() * 420);
    $('h1').text(getRandomThought());
  }, 10000);

}

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

function getRandomThought () {
  return thoughts[Math.floor(Math.random() * thoughts.length)];
}

function showerTime () {
  $('#static')[0].play();
  $('#typical').hide();
  $('#atypical').show();
}

function screamHickory () {
  $('#atypical').hide();
  $('#typical').show();
  $('#static')[0].pause();
}