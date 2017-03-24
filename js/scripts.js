$(document).ready(function() {
  $("form#celebrity").submit(function(event) {
    var food = $("select#food").val();
    var color = $("select#color").val();
    var age = $("select#age").val();
    var vacay = $("select#vacay").val();

    $(".celebrity-names").hide();

    if (food === "tacos" && color === "red") {

    $("#brad").fadeIn('slow');

  } else if (age === "21-40" && vacay === "Hawaii" || age === "21-40" && vacay === "Italy"){

    $("#tom").fadeIn('slow');

    } else {
    $("#zach").fadeIn('slow');
  }

  event.preventDefault();
  });
});
