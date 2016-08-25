$(document).ready(function() {
// all code goes in here

// ========= //
// Variables //
// ========= //
var color = 'white';
var colors = 'red blue green yellow white';
// ============= //
// EventClickers //
// ============= //
          // This code will add a class 'white' whenever I click on a individual box.
  $('.box').on('click', function() {
    $(this).addClass(color);
  });
          // This code will remove the 'white' when doubleclicked
  $('.box').on('dblclick', function() {
    $(this).removeClass(colors);
  });
          // Make the Reset Button work
  $('#reset').on('click', function() {
    $('.box').removeClass(colors);
  });
          // Begin changing colors:
  $('#red').on('click', function() {
    color = 'red';
  });
  $('#blue').on('click', function() {
    color = 'blue';
  });
  $('#green').on('click', function() {
    color = 'green';
  });
  $('#yellow').on('click', function() {
    color = 'yellow';
  });
  $('#white').on('click', function() {
    color = 'white';
  });

});


// ////////////////////////
