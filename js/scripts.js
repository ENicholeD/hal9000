// Business logic
var userName = $("#name").val();

function boops(beeps, userInput){
  for (i = 0; i <= userInput; i++){
    if (beeps[i].includes("3")){
      beeps[i] = "Sorry " + userName +", I can't do that";
    } else if (beeps[i].includes("2")){
      beeps[i] = "Boop";
    } else if (beeps[i].includes("1")){
      beeps[i] = "Beep";
    } else if (beeps[i].includes("0")){
      beeps[i] = "ERROR!";
    }
  }
  return beeps;
}
// User Interface logic
$(document).ready(function(){
$("iframe").hide();

  $(".form").submit(function(event){
    event.preventDefault();

    var userInput = $("#numberInput").val();
    var beeps = [];

    for (i = 0; i <= userInput; i++){
      beeps.push(i.toString());
    }

    output = boops(beeps, userInput);
    $(".hal").fadeIn();
    $("#robot").fadeIn();
    $("#try").fadeIn()
    $(".form").hide();
    $("iframe").show();
    $("h2").show();
    $("#out").text(output);

  });
});
