/*$("#firtName").keyup(function () {
    var firstName = $("#firstName").val();
});
$("#lastName").keyup(function () {
    var lastName = $("#lastName").val();
});*/
$("#lastName").blur(function () {
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    $("#fullName").val(firstName+" "+lastName);
});


function addition(firstNumber,lastNumber) {
    return firstNumber+lastNumber;

}
function subtraction(firstNumber,lastNumber) {
    return firstNumber-lastNumber;

}
function multiplication(firstNumber,lastNumber) {
    return firstNumber*lastNumber;

}
function division(firstNumber,lastNumber) {
    return firstNumber/lastNumber;

}
function reminder(firstNumber,lastNumber) {
    return firstNumber%lastNumber;

}

function mycalculator(operator){
    var firstNumber=Number($('#firstNumber').val());
    var lastNumber=Number($('#lastNumber').val());
    var result= 0;
    switch (operator) {
        case '+':
            result=addition(firstNumber,lastNumber);
            break;
        case '-':
            result=subtraction(firstNumber,lastNumber);
            break;
        case '*':
            result=multiplication(firstNumber,lastNumber);
            break;
        case '/':
            result=division(firstNumber,lastNumber);
            break;
        case '%':
            result=reminder(firstNumber,lastNumber);
            break;

    }
    $('#result').val(result);
}


/*
$("#btn").click(function () {
    $("#h1").css({
        "color":"red",
        "font-size":"30px",
        "background-color":"yellow",

    });
});
$("#submit").click(function () {
    var fName = $("#fName").val();
    var lName = $("#lName").val();
    var fullName = fName+" "+lName;
    $("#fullName").val(fullName);
})
*/

/*
var h1 = document.getElementById("h1");
h1.onclick= function () {
    h1.style.color = "red";
}*/
