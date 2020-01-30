$(document).ready(function(){
  
  //Variables to store the inputs of the user to calculate later
  var inputs = [""];
  
  //String to store the current input string
  var totalString;
  
  //Operators array to validate except the "."
  var operators1 = ["+","-","/","*"];
  
  //Operators for validation with the "."
  var operators2 = ["."];
  
  //Numbers for Validation
  var nums =[0,1,2,3,4,5,6,7,8,9];
  
  function getValue(input){
    //if the last value of input is true and if the last input is a "." give a console log error
    if(operators2.includes(inputs[inputs.length-1])=== true && input === "."){
      console.log("Duplicate '.'");
    }
    // if the first number is exaclty a single item and all operators minus the "." and not including an operator
    //Add that input to the inputs array
    else if(inputs.length === 1 && operators1.includes(input) === false){
      inputs.push(input);
    }
    // check if the last input is not an operator, add that input to the array
    else if(operators1.includes(inputs[inputs.length-1]) === false){
      inputs.push(input);
    }
    // check if the input includes a Number, add that input to the array 
    else if(nums.includes(Number(input))){
      inputs.push(input);
    }
    
    
    // call the update function at the end
    update();
  }
  
  // updates the current value
  function update(){
    
    totalString = inputs.join("");
    $("#steps").html(totalString);
    console.log(inputs);
  }
  
  // we get the total by actually making the calculation that we want to display
  function getTotal(){
    // it will evaluate the inputs
    totalString = inputs.join("");
    $("#steps").html(eval(totalString));
    
  }
  
  // when you click on something, run a function 
  $("a").on("click",function(){
    
    // resets the values when we clicked "AC"
    if(this.id === "deleteAll"){
      inputs = [""];
      update();
    }
    // Pop off the last value of inputs, when "CE" is clicked
    else if(this.id === "backOne"){
      inputs.pop();
      update();
    }
    // call the getTotal function when "=" is clicked
    else if(this.id === "total"){
      getTotal();
    }
    else{
      // if the last input of the array does not contain index of the operators, get the value
      if(inputs[inputs.length-1].indexOf("+","-","/","*",".") === -1){
          getValue(this.id);
         }
         else{
          getValue(this.id);
         }
    }
    
  });
  
});