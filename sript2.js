
        const questions = [
            {
                question: "What is the capital of France?",
                options: ["London", "Berlin", "Madrid", "Paris"],
                correctAnswer: "Paris"
            },
            {
                question: "Which planet is known as the Red Planet?",
                options: ["Earth", "Mars", "Venus", "Jupiter"],
                correctAnswer: "Mars"
            },
            {
                question: "What is the largest mammal in the world?",
                options: ["Elephant", "Giraffe", "Blue Whale", "Lion"],
                correctAnswer: "Blue Whale"
            },
            {
                question: "Which gas do plants absorb from the atmosphere?",
                options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
                correctAnswer: "Carbon Dioxide"
            }
        ];

        let currentQuestionIndex = 0;
        let score = 0;

        const questionText = document.getElementById("question-text");
        const optionsContainer = document.getElementById("options-container");
        const scoreElement = document.getElementById("score");
        const resultImage = document.getElementById("result-image");
        const resultText = document.getElementById("result-text");

        function displayQuestion() {
            const currentQuestion = questions[currentQuestionIndex];
            questionText.textContent = currentQuestion.question;

            optionsContainer.innerHTML = "";
            currentQuestion.options.forEach((option) => {
                const button = document.createElement("button");
                button.textContent = option;
                button.addEventListener("click", () => checkAnswer(option));
                optionsContainer.appendChild(button);
            });
        }

        function checkAnswer(selectedOption) {
            const currentQuestion = questions[currentQuestionIndex];
            if (selectedOption === currentQuestion.correctAnswer) {
                score++;
            }
            currentQuestionIndex++;

            if (currentQuestionIndex < questions.length) {
                displayQuestion();
            } else {
                displayResult();
            }
        }

        function displayResult() {
            questionText.textContent = "";
            optionsContainer.innerHTML = "";
            scoreElement.textContent = `Score: ${score}`;
            if (score >= 2) {
                resultImage.src = "win.gif";
                resultText.textContent = "Congratulations! You win!";
            } else {
                resultImage.src = "lose.gif";
                resultText.textContent = "Sorry, you lost.";
            }
        }
        displayQuestion();