

function isValidNumber(number){
    if(number == null){
        alert("Null is not accepted. We are taking this as 0.");
        return false;
    }else if(number.length == 0){
        alert("Empty string is not accepted. We are taking this as 0.");
        return false;
    }else if(isNaN(number)){
        alert("This is not a valid number. We are evaluating this as 0.");
        return false;
    }else{
        return true;
    }
}

function processInput(number){

    if(isValidNumber(number)){
        number = parseInt(number);
    }else{
        number = 0;
    }
    return number;
}



function getResult(numbers, operator){
    let result = 0;

    if(operator == '+'){
        for(let i=0; i < numbers.length; i++){
            result = result + numbers[i];
        }
    }
    if(operator == '-'){
        for(let i=0; i < numbers.length; i++){
            result = result - numbers[i];
        }
    }

    if(operator == '*'){
        result = 1;
        for(let i=0; i < numbers.length; i++){
            result = result * numbers[i];
            console.log(result);
        }
    }
    return result;

}


let numberOfInputs = processInput(window.prompt("How many number do you want to enter:"));
let numbers = [];
let j = 1;
for(let i =0; i < numberOfInputs; i++){
    numbers[i] = processInput(window.prompt("Enter number "+j+" :"));
    j++;
}
if(numberOfInputs == 0){
    alert("You do not want to enter any number!!!");
}else{
    let operator = window.prompt("Enter '+' to add the numbers.\nEnter '-' to substract.\n Enter '*' to multiply.")
    alert(getResult(numbers, operator));
}


