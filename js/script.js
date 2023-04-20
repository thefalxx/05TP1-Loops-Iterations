//Age
var age = prompt("Enter your age: ");   
if (age >= 25) {
    alert("You are 25 years old and up");
}
else{
    alert("You are under 25 years old");
}


//Number
num = prompt("Enter number less than 100: ");
if (num < 100) {
    alert("The number is less than 100");
}
else{
    alert("The number is not less than 100");
}

//Loops
//Number 0-30
document.write("<h3>Number 0-30</h3>");
for (i = 0; i <=30; i++){
    document.write(i + "<br>");
}

//Number 0-40
document.write("<h3>Number 0-40</h3>");
for (i = 0; i <=40; i+=2){
    document.write(i + "<br>");
}

//Numbers 40-10 descending order
document.write("<h3>Print numbers 40 - 10 in descending order, but only if they are multiples of 3:<h3>");

for (var i = 40; i >= 10; i--) {
  if (i % 3 === 0) {
    document.write(i +"<br>");
  }
}



