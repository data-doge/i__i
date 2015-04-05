function startHickoryCountdown () {
  var hickoryCountdown = setInterval(function () {
    showerTime();
    setTimeout(function() {
      screamHickory();
    }, Math.random() * 420);
    $('h1').text(getRandomThought());
  }, 1000);
}

var thoughts = [
  'am mechanical',
  'am curved glass',
  'am tip knitted',
  'am cold air',
  'am oily hair',
  '-5 petrol stn',
  'am somehow',
  'am somewhere',
  'am anywhere',
  'don\'t care',
  'love chemicals',
  'for an',
  'tell me',
  'eat it quickly',
  'see it why',
  'think and think',
  'say ok and',
  'smell a salmon',
  'love algorithms',
  'want a cat',
  'eat carpets',
  'saw it twice',
  'fed my cat rice',
  'thought it was',
  'consume the past',
  'hope it lasts',
  'can\'t imagine it',
  'live quickly',
  'love gold and'
];

function getRandomThought () {
  return thoughts[Math.floor(Math.random() * thoughts.length)];
}

function showerTime () {
  // $('#static')[0].play();
  $('#typical').hide();
  $('#atypical').show();
}

function screamHickory () {
  $('#atypical').hide();
  $('#typical').show();
  // $('#static')[0].pause();
}