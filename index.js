//Array containing question bank 
const STORE = [{
        question: 'In what country was tennis invented?',
        answers: [
            'United States of America',
            'Germany',
            'Great Britain',
            'France'
        ],
        correctAnswer: 'France'
    },
    {
        question: 'In it’s earliest stages, tennis was played with: ',
        answers: [
            'A bat',
            'The palm of your hand',
            'A racket',
            'A broom stick'
        ],
        correctAnswer: 'The palm of your hand'
    },
    {
        question: 'Today, the worlds four most important tennis tournaments, known as “Grand Slams” are: ',
        answers: [
            'Indian wells, Roland Garros, Australian Open, Miami Open',
            'Indian Wells, Wimbledon, Roland Garros, Australian Open',
            'Australian Open, Wimbledon, Roland Garros, U.S. Open',
            'Montecarlo Championships, Roland Garros, U.S. Open, Wimbledon'
        ],
        correctAnswer: 'Australian Open, Wimbledon, Roland Garros, U.S. Open'
    },
    {
        question: 'Which of the following is not a surface used for tennis courts?',
        answers: [
            'Grass',
            'Clay',
            'Hard-Court',
            'All of these are tennis court surfaces'
        ],
        correctAnswer: 'All of these are tennis court surfaces'
    },
    {
        question: 'Which American Men’s tennis player has won the most Grand Slam tournaments?',
        answers: [
            'Jimmy Connors',
            'Andy Roddick',
            'Jim Courier',
            'Pete Sampras'
        ],
        correctAnswer: 'Pete Sampras'
    },
    {
        question: 'Historically, which two players lead in number of Grand Slam victories? ',
        answers: [
            'Roger Federer and Serena Williams',
            'Roger Federer and Steffi Graff',
            'Pete Sampras and Serena Williams',
            'Roger Federer and Margaret Court'
        ],
        correctAnswer: 'Roger Federer and Margaret Court'
    },
    {
        question: 'Who is the first African American to win a Grand Slam title?',
        answers: [
            'Althea Gibson',
            'Arthur Ashe',
            'Venus Williams',
            'Bob Ryland'
        ],
        correctAnswer: 'Althea Gibson'
    },
    {
        question: 'Which of these players has the record for most titles of one Grand Slam?',
        answers: [
            'Roger Federer',
            'Rafael Nadal',
            'Novak Djokovic',
            'Rod Laver'
        ],
        correctAnswer: 'Rafael Nadal'
    }
]


//Variables containing information on the current score and question number;
let score = 0;
let questionNumber = 0;


//begins the quiz
function beginQuiz() {

    $('.altBox').hide();
    $('.start').on('click', '.startButton', function(event) {
        $('.start').hide('questionContainer');
        $('.questionNumber').text(1);
        $('.questionContainer').show();
        $('.questionContainer').prepend(renderQuestion());
        nextQuestion();
    });
    console.log('`beginQuiz` executed')
}


//generates quiz questions
function renderQuestion() {
    if (questionNumber < STORE.length) {
        return createForm(questionNumber)
    } else {
        $('.questionBox').hide();
        finalScore();
        $('.questionNumber').text(10);
    }


    console.log('`renderQuestion` executed');
}

//creates html for question form
function createForm(questionIndex) {
    let formMaker = $(`<form>
    <fieldset>
      <legend class="questionText">${STORE[questionIndex].question}</legend>
    </fieldset>
  </form>`)

    let fieldSelector = $(formMaker).find('fieldset');

    STORE[questionIndex].answers.forEach(function(answerValue, answerIndex) {
        $(`<label class="sizeMe" for="${answerIndex}">
        <input class="radio" type="radio" id="${answerIndex}" value="${answerValue}" name="answer" required>
        <span>${answerValue}</span>
      </label>
      `).appendTo(fieldSelector);
    });
    $(`<button type="submit" class="submitButton button"> Submit</button > `).appendTo(fieldSelector);
    return formMaker;
}
//increases value of the score variable by one and updates the score on the quiz view
function updateScore() {
    score++;
    $('.score').text(score);
    console.log('`updateScore` executed');
}

//increases value of the questionNumber variable by one and updates the questionNumber on the quiz view
function updateQuestionNumber() {
    questionNumber++;
    $('.questionNumber').text(questionNumber);
    console.log('`updateQuestionNumber` executed');
}

//resets all quiz stats to set them up for a new attempt of the quiz
function resetStats() {
    score = 0;
    questionNumber = 0;
    $('.score').text(0);
    $('.questionNumber').text(0);
}

//creates feedback corresponding to an incorrect submission
function incorrectResponse() {
    console.log('`incorrectResponse` executed')
    $('.response').html(
        `<h3>That's the wrong answer...</h3>
        <img src="images/you-cannot-be-serious.jpg" alt="angry-tennis-player" class="images" width="200px">
        <p class="sizeMe">It's actually:</p>
        <p class="sizeMe">${STORE[questionNumber].correctAnswer}</p>
        <button type="button" class="nextButton button">Next</button>`
    );

}

//creates feedback corresponding to a correct submission and updates the score
function correctResponse() {

    $('.response').html(
        `<h3>Your answer is correct!</h3>
        <img src="images/vamos-rafa.jpg" alt="Rafael Nadal fist pump" class="images" width="200px">
          <p class="sizeMe">You got it right! Vamos!</p>
          <button type="button" class="nextButton button">Next</button>`
    );
    updateScore();



    console.log('`correctResponse` executed')


}

function nextQuestion() {
    console.log('`nextQuestion` executed')

    $('.submitButton').on('click', function(event) {
        event.preventDefault();
        $('.altBox').hide();
        $('.questionBox').show();
        updateQuestionNumber();
        $('.questionBox form').replaceWith(renderQuestion());
    })
};

function finalScore() {

}


//takes user to starting view to restart the quiz
function restartQuiz() {
    function restartQuiz() {
        $('.jungleBox').on('click', '.restartButton', function(event) {
            event.preventDefault();
            resetStats();
            $('.altBox').hide();
            $('.startQuiz').show();
        });
    }

}
//runs functions
function createQuiz() {
    beginQuiz();
    renderQuestion();
    updateScore();
    updateQuestionNumber();
    resetStats();

    createForm();

}

$(createQuiz);