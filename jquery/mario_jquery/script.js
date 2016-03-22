$(document).ready(function() {
  $(document).keydown(function(key) {
    switch(parseInt(key.which,10)) {
      // left arrow key pressed
      case 37:
        $('img').animate({left: "-=10px"}, 'fast');
        break;
      // up arrow pressed
      case 38:
        $('img').animate({top: "-=10px"}, 'fast');
        break;
      // right arrow pressed
      case 39:
        $('img').animate({left: "+=10px"}, 'fast');
        break;
      // down arrow pressed
      case 40:
        $('img').animate({top: "+=10px"}, 'fast');
        break;    
    } // end switch
  }); // end keydown
}); // end ready
