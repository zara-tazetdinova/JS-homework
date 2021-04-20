
< script >
    input = prompt("Enter a number please")
    console.log(NumToObj(input));

    function NumToObj(input) {
        var returnable = {};
        console.log("Incoming number: " + input.toString());
        if (input < 1000 && input > 0) {
            if (input < 100 && input > 9) {
                input = '0' + input.toString();
            }
            if (input < 10) {
                input = '00' + input.toString();
            }
        /*We can dynamically assign properties and methods to the object*/
            returnable.hundreds = input.toString().substring(0, 1);
            returnable.tens = input.toString().substring(1, 2);
            returnable.ones = input.toString().substring(2, 3);
        } else {
        alert('The incoming number is greater than 999.');
        var returnable = {};
        }
    return returnable;
    } 

</script>