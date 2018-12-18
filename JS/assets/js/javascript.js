/*Arithmetic Operator*/
var firstNumber, lastNumbrt, result;

//document.write(firstNumber); //undefined

firstNumber = 20; //Assigning Value
lastNumber = 10; //Assigning Value

result = firstNumber + lastNumber; //Addition of two numbers

/*document.write("Result of firstNumber and lastNumber is :" + result); //display result value*/
document.getElementById("comment").innerHTML = "Result of firstNumber and lastNumber is :" + result;

/*Condition Statements*/

var checkcondition = "Be-Practical";

if(checkcondition=="Be-Practical"){
    document.getElementById("simpleif").innerHTML = "Condition is true..!"
}

/*If Else statement Example..!*/
function IfElse(){ //Function Declaration
    /*alert("Hi this is function..!");*/
    var firstNumber=document.getElementById("firstNumber").value, lastNumber=document.getElementById("lastNumber").value;
        if(firstNumber==lastNumber){
          document.getElementById("ifelse").innerHTML = "Condition is true..!"  
        }
    else{
        document.getElementById("ifelse").innerHTML = "Condition is not true..!"
    }
    }

/*If Else Ladder Example..!*/
function IfElseLadder(){ //Function Declaration
    /*alert("hi");*/
    var firstNumber=document.getElementById("firstNumber1").value,                          lastNumber=document.getElementById("lastNumber1").value;
        /*alert(document.getElementById("firstNumber1").value);
        alert(document.getElementById("lastNumber1").value);*/

        if(firstNumber=="" || lastNumber==""){
          document.getElementById("ifelseladder").innerHTML = "Enter number..!";
        }
        else if(firstNumber==lastNumber){
          document.getElementById("ifelseladder").innerHTML = "Both are same..!";
        }
        else if(firstNumber>lastNumber){
          document.getElementById("ifelseladder").innerHTML = "First number is big..!"; 
        }
        else if(firstNumber<lastNumber){
          document.getElementById("ifelseladder").innerHTML = "Second number is big..!"; 
        }
        else{
        document.getElementById("ifelseladder").innerHTML = "Enter Valid number..!";
        }
    }

/*Switch Case Example*/

function switchFun(){
    var caseCondition = parseInt(document.getElementById("switchnumber").value);
    
    switch(caseCondition){
        case 1:
            document.getElementById("switchresult").innerHTML = "You have selected case 1..!"
        break;
            
        case 2:
            document.getElementById("switchresult").innerHTML = "You have selected case 2..!"
        break;
            
        case 3:
            document.getElementById("switchresult").innerHTML = "You have selected case 3..!"
        break;
            
        default:
            document.getElementById("switchresult").innerHTML = "Input Value is incorrect..!";   
    }
}

/*Prompt messages*/

function myPrompt(){
    var switchcase = parseInt(prompt("Case1,Case2,Case3,Case4","1,2,3,4"));
                              
    switch(switchcase)
    {
        case 1:
        document.getElementById("prompt").innerHTML = "This is addition"
        var a = Number(prompt("Enter first number"));
        var b = Number(prompt("Enter second number"));
        var c = Number(prompt("Addition of two numbers", "a+b"));
        /*document.getElementById("prompt").innerHTML = a+b;*/
        break;
        
        case 2:
        document.getElementById("prompt1").innerHTML = "This is subtraction"
        var a = Number(prompt("Enter first number"));
        var b = Number(prompt("Enter second number"));
        var c = Number(prompt("Subtraction of two numbers", "a-b"));
        /*document.getElementById("prompt1").innerHTML = a-b;*/
        break;
        
        case 3:
        document.getElementById("prompt2").innerHTML = "This is multiplication"
        var a = Number(prompt("Enter first number"));
        var b = Number(prompt("Enter second number"));
        var c = Number(prompt("Multiplication of two numbers", "a*b"));
        /*document.getElementById("prompt2").innerHTML = a*b;*/
        break;
        
        case 4:
        document.getElementById("prompt3").innerHTML = "This is division"
        var a = Number(prompt("Enter first number"));
        var b = Number(prompt("Enter second number"));
        var c = Number(prompt("Division of two numbers", "a/b"));
        /*document.getElementById("prompt3").innerHTML = a/b;*/
        break;
        
        
    }
}

