<script>
  var number = +prompt("Please enter a number from 0 to 999");
numberToObject(number);
function numberToObject(num) {
  if (num <= 999 && num >= 0) {
    var obj = {};
    obj.ones = num % 10;
    obj.tens = Math.floor(num / 10 % 10);
    obj.hundreds = Math.floor(num / 100);
    console.log("The number you entered is: " +num);
    console.log(obj);
  } 
  else {
    console.log('Invalid number');
    var obj = {};
    console.log(obj);
  }
}
</script>

