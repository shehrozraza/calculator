function appendToDisplay(input){
    var display = document.getElementById("display");
    display.value += input;
}

function clearDisplay(){
    var display = document.getElementById("display");
    display.value = "" ;
}

function calculate(){
    var display = document.getElementById("display");
    try {
        display.value = eval(display.value) 
    } catch (error) {
        display.value = "Error"
    }
}