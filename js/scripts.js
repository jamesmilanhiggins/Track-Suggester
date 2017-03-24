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
    $(".container").hide();
    $(".sidebar").hide();


    if (projects === "android" && location === "portland" ||company === "bigCompany" && location === "portland" ) {
    $("#javaPDX").show('slow');
  } else if (typeOfDev === "look" && location === "portland") {
    $("#cssPDX").show('slow');
  } else if (typeOfDev === "look" && location === "seattle") {
    $("#cssSEA").show('slow');
  } else if (company === "agency" && location === "seattle") {
    $("#phpSEA").show('slow');
  } else if (company === "agency" && location === "portland") {
    $("#phpPDX").show('slow');



  // } else if (company === "agency" && location === "seattle" ){
  //   $("#phpSEA").fadeIn('slow');
  // } else if (ompany === "agency" && location === "portland" ){
  //   $("#phpPDX").fadeIn('slow');

    } else {

    $("#ruby-railsPDX").fadeIn('slow');
  }

  event.preventDefault();
  });
});
