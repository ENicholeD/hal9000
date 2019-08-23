(document).ready(function(){
  (".form").submit(function(event){
    event.preventDefault();

    var userInput = $("#numberInput").val();
    var beeps = [];

    for (i = 0; i <= userInput; i++){
      beeps.push(i.toString());
    }

    output = boops(beeps, userInput){

      for (beeps[i].includes("3")){
        beeps[i] = "Sorry Dave. I can't do that."
      }
      if (beeps[i].includes("2")){

      }
    }
  });
});
