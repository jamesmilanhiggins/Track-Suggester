$(document).ready(function() {
  $("form#developer").submit(function(event) {
    // var location = $("input:radio[name=location:checked]").val();
    var location = $("select#location").val();
    var typeOfDev = $("select#typeOfDev").val();
    var company = $("select#company").val();
    var projects = $("select#projects").val();
    var vacay = $("select#vacay").val();

    $(".tracks").hide();

    if (typeOfDev === "look" && location === "portland") {

    $("#cssPDX").show('slow');

  } else if (projects === "android" && location === "seattle" ){

    $("#javaSEA").fadeIn('slow');

  } else if (projects === "android" && location === "portland" ){

    $("#javaPDX").fadeIn('slow');

    } else {

    $("#ruby-railsPDX").fadeIn('slow');
  }

  event.preventDefault();
  });
});
