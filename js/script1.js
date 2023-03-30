$(document).ready(function() {

  var request = null;
  var mouse = {
    x: 0,
    y: 0
  };
  var cx = window.innerWidth / 2;
  var cy = window.innerHeight / 2;

  $('body').mousemove(function(event) {

    mouse.x = event.pageX;
    mouse.y = event.pageY;

    cancelAnimationFrame(request);
    request = requestAnimationFrame(update);
  });

  function update() {

    var dx = mouse.x - cx;
    var dy = mouse.y - cy;

    var tiltx = (dy / cy);
    var tilty = -(dx / cx);
    var radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2));
    var degree = (radius * 2);
    TweenLite.to("#container", 1, {
      transform: 'rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)',
      ease: Power2.easeOut
    });
  }

  $(window).resize(function() {
    cx = window.innerWidth / 2;
    cy = window.innerHeight / 2;
  });
});
