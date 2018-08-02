var counter = 7;
var seconds = 7;
$('#counter span').html(counter);
$('#timer span').html(seconds);

$(start')hide();
$(win')hide();
$(endScreen')hide();

$('#startGame').on("mouseover", function () {
        $(this).hide();

        var randWidth = random = Math.ceil(Math.random() * 400);
        var randHeight = random = Math.ceil(Math.random() * 400);

        $('#win').show('fast');
        $('#win').css('top', randHeight);
        $('#win').css('left', randWidth);

        window.setInterval(function () {
          seconds = seconds + 1;
          $('#timer span').html(seconds);
        }, 1000);
      });

$('#start').on("mouseover", function () {

  var randWidth = random = Math.ceil * 400);
var randHeight = random = Math.ceil * 400);

$('#win').show('fast');
$('#win').css('top', );
$('#win').css('left', );
$(this).hide('fast');
});

$('win').on("mouseover", function () {
  counter = counter + 1;
  $('#counter span').html(counter);

  if (counter = 20) {
    $('#endScreen').show('medium');
    $('#endCount').html(counter);
    $('#endSeconds').html(seconds);
  }

  $(this).hide('slow');
  $('#start').show('slow');

});