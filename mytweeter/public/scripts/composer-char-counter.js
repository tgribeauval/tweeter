$(document).ready(function() {
  $(".textarea").on('keyup', function(event) {
      var charNumber = $(this).val().length
      var counter = 140 - charNumber
      $('.counter').text(counter)
      if (counter < 0) {
        $('.counter').css( "color", "red" );
      } else {
        $('.counter').css( "color", "black" );
      }
  })
});
