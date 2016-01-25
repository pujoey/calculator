// STATE OF THE CALCULATOR
var startNumber="0";  //gb var to store the first number
var lastNumber="";  //gb var to store the last number
var result=0;  //gb var to store the result of calculation
var userInput="";
var isOperator=false;
var calsign = "";

//initial rendering
render();

$('.clear').on("click", function() {
  clear();
})

$('.keys').on("click", "span", function(evt) {

  if (startNumber == "0") {
    startNumber = "";
  }
   userInput = $(this).text();

  switch(userInput) {
    case "0": isOperator ? lastNumber += "0" : startNumber+= "0"; break;
    case "1": isOperator ? lastNumber += "1" : startNumber+= "1"; break;
    case "2": isOperator ? lastNumber += "2" : startNumber+= "2"; break;
    case "3": isOperator ? lastNumber += "3" : startNumber+= "3"; break;
    case "4": isOperator ? lastNumber += "4" : startNumber+= "4"; break;
    case "5": isOperator ? lastNumber += "5" : startNumber+= "5"; break;
    case "6": isOperator ? lastNumber += "6" : startNumber+= "6"; break;
    case "7": isOperator ? lastNumber += "7" : startNumber+= "7"; break;
    case "8": isOperator ? lastNumber += "8" : startNumber+= "8"; break;
    case "9": isOperator ? lastNumber += "9" : startNumber+= "9"; break;
    case ".": isOperator ? lastNumber += "." : startNumber+= "."; break;
    case "+/-": isOperator ? lastNumber = "-" +lastNumber : startNumber = "-" +startNumber; break;
    case "+": sign("+"); break;
    case "-": sign("-"); break;
    case "x": sign("x"); break;
    case "÷": sign("÷"); break;
    case "=": calculate(); break;
  }

  render();
});

function sign(sign) {
  isOperator = true;
  userInput = "";
  $("#display").text("");
  calsign=sign;
}

function calculate() {
  switch(calsign) {
   case "+": result = Number(startNumber) + Number(lastNumber); break;
   case "-": result = Number(startNumber) - Number(lastNumber); break;
   case "x": result = Number(startNumber) * Number(lastNumber); break;
   case "÷": result = Number(startNumber) / Number(lastNumber); break;
  }
  //check if result has decimals, yes then parse to 2 decimal place
  if (result % 1 !==0 ) {
    result = parseFloat(result).toFixed(2);
  }
}

function render() {
  //display gb var numberPressed
  //display gb var result if "=" pressed
  if (result) { $(".screen").text(result); }
  else if (calsign !== "" && lastNumber=="") { $(".screen").text(""); }
  else { (lastNumber=="") ?   $(".screen").text(startNumber):$(".screen").text(lastNumber); }
}

function clear() {
startNumber="";  //gb  to store the first number
 lastNumber="";  //gb  to store the last number
 result=0;  //gb  to store the result of calculation
 userInput="";
 isOperator=false;
calsign = "";
$(".screen").text("0");
}
