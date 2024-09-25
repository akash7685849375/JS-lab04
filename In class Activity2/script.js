// Function to determine the grade on score basis
function determineGrade() {
    // Prompt the user to enter a score
    let input = prompt("Enter your score:");

    // to convert into the number from input
    let score = Number(input);

    // Checking if the input is a valid number
    if (isNaN(score) || score < 0 || score > 100) {
        console.log("Please enter a valid score between 0 and 100.");
    } else {
        // to find the grade on score basis
        let grade;
        if (score >= 80) {
            grade = 'A';
        } else if (score >= 70) {
            grade = 'B';
        } else if (score >= 60) {
            grade = 'C';
        } else if (score >= 50) {
            grade = 'D';
        } else {
            grade = 'F';
        }
        console.log(`Your score is ${score} and your grade is ${grade}.`);
    }
}

// adding a event listener to the button
document.getElementById("gradeButton").addEventListener("click", determineGrade);
