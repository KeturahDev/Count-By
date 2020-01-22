$(document).ready(function() {
    $('#formy').submit(function(event) {
        event.preventDefault();

        var numb1 = parseInt($('input#number1').val());
        var numb2 = parseInt($('input#number2').val());

        if (numb1 > numb2 && numb1 >= 1 && numb2 >= 1) {
            for (var index = 0; index <= numb1; index += numb2) {
            alert(index);
            } 
        } else {
            alert ('please input numbers. please have number 1 be more than number 2');
        }

    });
});