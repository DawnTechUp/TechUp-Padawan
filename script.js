var age = 20;
age = 65;
console.log(age);

var username = "dawn";
var password = "123";
var isFemale = true;
var isLoggedIn = false;
var blogpost = ["what is going on?", "what will happen?"]; 

console.log(username);
console.log(password);
console.log(isFemale);
console.log(isLoggedIn);
console.log(blogpost);

if(isFemale == true) {
     console.log("i am a girl!");
}
while (age < 70) {
    console.log("Your age is " + age );
    age = age + 1;
}
function sayHello() {
    alert("Hello evil friends"); 
}
function showAge() {

    // Get the value from the input field of ID #user-input
    // Store this value in a variable called user_input
    var user_input = document.getElementById("user-input").value

    // Update the content for the HTML element with ID #header-age with 
    // whatever the user_input varible contains
    document.getElementById("header-age").textContent = user_input
}

