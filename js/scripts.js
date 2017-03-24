$(document).ready(function() {
  $("form#developer").submit(function(event) {
    // var location = $("input:radio[name=location:checked]").val();
    var typeOfDev = $("select#typeOfDev").val();
    var company = $("select#company").val();
    var projects = $("select#projects").val();
    var vacay = $("select#vacay").val();

    $(".tracks").hide();

    if (typeOfDev === "work" && company === "startUp") {

    $("#ruby-railsPDX").show('slow');

  // } else if (age === "21-40" && vacay === "Hawaii" || age === "21-40" && vacay === "Italy"){
  //
  //   $("#tom").fadeIn('slow');

    } else {
    $("#cssSEA").fadeIn('slow');
  }

  event.preventDefault();
  });
});
