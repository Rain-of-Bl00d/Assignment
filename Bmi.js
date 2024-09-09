let userweightInKg = document.getElementById("weightInput");
let userheightInMt = document.getElementById("heightInput");
let gaugeEl = document.getElementById("gaugeId");

function calculateFunc() {
    // Parse input values to floats
    let weightInKg = parseFloat(userweightInKg.value);
    let heightInMt = parseFloat(userheightInMt.value);
    // Calculate BMI
    let bmi = weightInKg / (heightInMt * heightInMt);

    // Adjust the gauge based on BMI
    if (bmi < 18.5) {
        gaugeEl.style.transform = "rotate(-90deg)";
        gaugeEl.style.transition = "transform 0.5s ease";
        alert(bmi)
    } else if (bmi >= 18.5 && bmi < 24.9) {
        gaugeEl.style.transform = "rotate(-60deg)";
        gaugeEl.style.transition = "transform 0.5s ease";
        alert(bmi)
    } else if (bmi >= 24.9 && bmi < 29.9) {
        gaugeEl.style.transform = "rotate(0deg)";
        gaugeEl.style.transition = "transform 0.5s ease";
        alert(bmi)
    } else if (bmi >= 29.9 && bmi < 30.49) {
        gaugeEl.style.transform = "rotate(60deg)";
        gaugeEl.style.transition = "transform 0.5s ease";
        alert(bmi)
    } else if (bmi >= 30.49 && bmi < 34.9) {
        gaugeEl.style.transform = "rotate(90deg)";
        gaugeEl.style.transition = "transform 0.5s ease";
        alert(bmi)
    } else if (bmi > 34.9) {
        gaugeEl.style.transform = "rotate(60deg)";
        gaugeEl.style.transition = "transform 0.5s ease";
        alert(bmi)
    } else {
        // Reset the gauge or set it to a different rotation based on other conditions
        gaugeEl.style.transform = "rotate(0deg)"; // Example reset
        alert(bmi)
    }
}

function resetFunct() {
    userweightInKg.value = "";
    userheightInMt.value = ""
    gaugeEl.style.transform = "rotate(0deg)";
}
