$(document).ready(function(){
  $(".form").submit(function(event){
    event.preventDefault();

    var userInput = $("#numberInput").val();
    var beeps = [];

    for (i = 0; i <= userInput; i++){
      beeps.push(i.toString());
    }

    output = boops(beeps, userInput);
    $(".hal").fadeIn();
    $(".form").hide();
    $("#out").text(output);


    function boops(beeps, userInput){
      for (i = 0; i <= userInput; i++){
        if (beeps[i].includes("3")){
          beeps[i] = "Sorry Dave. I can't do that";
        } else if (beeps[i].includes("2")){
          beeps[i] = "Boop";
        } else if (beeps[i].includes("1")){
          beeps[i] = "Beep";
        }
      }
      return beeps;
    }
  });
});
