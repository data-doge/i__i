function startHickoryCountdown (time) {
  var hickoryCountdown = setInterval(function () {
    showerTime();
    setTimeout(function() {
      screamHickory();
    }, Math.random() * 420);
    $('h1').text(getRandomThought());
  }, time);
}

var thoughts = ['am mechanical', 'am curved glass', 'am tip knitted', 'am cold air', 'am oily hair', 'don\'t care', 'tell me', 'see it why', 'think and think', 'saw it twice', 'thought it was', 'hope it lasts', 'can\'t imagine it'];

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