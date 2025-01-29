const myText = document.getElementById("ageInput");
const mySubmit = document.getElementById("submitBtn");
const myResult = document.getElementById("result");

let age; 


mySubmit.onclick = function() {
    age = myText.value;
    age = Number(age); 

    if (age < 13) {
        myResult.textContent = "Too Young";
    } else if (age >= 13 && age < 18) {
        myResult.textContent = "Must have parental guidance";
    } else if (age >= 18 && age <= 30) {
        myResult.textContent = "Perfect age range";
    } else if (age > 30 && age <= 60) {
        myResult.textContent = "Too old";
    } else if (age > 60) {
        myResult.textContent = "Go retire";
    } else {
        myResult.textContent = "Please enter a valid age.";
    }
};
