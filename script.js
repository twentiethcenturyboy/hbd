import confetti from 'https://cdn.skypack.dev/canvas-confetti';

(function() {
  function makeConfetti() {
    confetti();
  }

  // Auto-execute makeConfetti every 2 seconds
  setInterval(makeConfetti, 2000);
})();



//BUTTONS

document.getElementById('storybutton').addEventListener('click', function() {
  window.location.href = '3story.html'; 
});
document.getElementById('mikkiphoto').addEventListener('click', function() {
  window.location.href = '4mikki.html'; 
});
document.getElementById('favmikki').addEventListener('click', function() {
  window.location.href = '5favmikki.html'; 
});
document.getElementById('bdaymessage').addEventListener('click', function() {
  window.location.href = '6birthdaymessage.html'; 
});

document.getElementById('spotify').addEventListener('click', function() {
  // Open a new tab with the specified URL
  window.open('https://open.spotify.com/playlist/43YMMfX2d5i4BE3iAbF8XD?si=6lw3b4LNQ42kWY6-JrpqKQ', '_blank');
});