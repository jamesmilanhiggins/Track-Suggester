$(document).ready(function() {
  $("form#developer").submit(function(event) {
    var yourNameInput = $("input#yourName").val();
    var location = $("input:radio[name=location]:checked").val();
    var typeOfDev = $("select#typeOfDev").val();
    var company = $("select#company").val();
    var projects = $("select#projects").val();
    var vacay = $("select#vacay").val();


    $(".yourName").text(yourNameInput);
    $(".tracks").hide();

    if (typeOfDev === "look" && location === "portland") {
    $("#cssPDX").show('slow');

  } else if (typeOfDev === "look" && location === "seattle") {
    $("#cssSEA").show('slow');

  } else if (projects === "android" && location === "seattle" ){
    $("#javaSEA").fadeIn('slow');
  } else if (projects === "android" && location === "portland" ){
    $("#javaPDX").fadeIn('slow');

  } else if (company === "agency" && location === "seattle" ){
    $("#phpSEA").fadeIn('slow');
  } else if (ompany === "agency" && location === "portland" ){
    $("#phpPDX").fadeIn('slow');


    } else {

    $("#ruby-railsPDX").fadeIn('slow');
  }

  event.preventDefault();
  });
});
