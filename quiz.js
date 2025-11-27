// 1. Start with the Function Declaration
function checkAnswer() {

    // 2. Identify the Correct Answer
    const correctAnswer = "4";

    // 3. Retrieve the User’s Answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Handle case where no option is selected
    if (!selectedOption) {
        document.getElementById('feedback').textContent = "Please select an answer.";
        return;
    }

    const userAnswer = selectedOption.value;

    // 4. Compare the User’s Answer with the Correct Answer
    if (userAnswer === correctAnswer) {
        document.getElementById('feedback').textContent = "Correct! Well done.";
    } else {
        document.getElementById('feedback').textContent = "That's incorrect. Try again!";
    }
}

// 5. Add Event Listener to the Submit Button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
