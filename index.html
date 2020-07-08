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
];

//variables to store the quiz score and question number information
let score = 0;
let questionNumber = 0;

//template to generate each question
function generateQuestion() {
  if (questionNumber < STORE.length) {
    return createThing(questionNumber);
  } else {
    $('.questionBox').hide();
    finalScore();
    $('.questionNumber').text(8);
  }
}

//increments the number value of the "score" variable by one
//and updates the "score" number text in the quiz view
function updateScore() {
  score++;
  $('.score').text(score);
}

//increments the number value of the "question number" variable by one
//and updates the "question number" text in the quiz view
function updateQuestionNumber() {
  questionNumber++;
  $('.questionNumber').text(questionNumber + 1);
}

//resets the text value of the "question number" and "score" variables
//and updates their repective text in the quiz view
function resetStats() {
  score = 0;
  questionNumber = 0;
  $('.score').text(0);
  $('.questionNumber').text(0);
}

//begins the quiz
function startQuiz() {
  $('.altBox').hide();
  $('.startQuiz').on('click', '.startButton', function (event) {
    $('.startQuiz').hide();
    $('.questionNumber').text(1);
    $('.questionBox').show();
    $('.questionBox').prepend(generateQuestion());
  });
}

//submits a selected answer and checks it against the correct answer
//runs answer functions accordingly
function submitAnswer() {
  $('.stadiumBox').on('submit', function (event) {
    event.preventDefault();
    $('.altBox').hide();
    $('.response').show();
    let selected = $('input:checked');
    let answer = selected.val();
    let correct = STORE[questionNumber].correctAnswer;
    if (answer === correct) {
      correctAnswer();
    } else {
      wrongAnswer();
    }
  });
}

//creates html for question form
function createThing(questionIndex) {
  let formMaker = $(`<form>
    <fieldset>
      <legend class="questionText">${STORE[questionIndex].question}</legend>
    </fieldset>
  </form>`)

  let fieldSelector = $(formMaker).find('fieldset');

  STORE[questionIndex].answers.forEach(function (answerValue, answerIndex) {
    $(`<label class="sizeMe" for="${answerIndex}">
        <input class="radio" type="radio" id="${answerIndex}" value="${answerValue}" name="answer" required>
        <span>${answerValue}</span>
      </label>
      `).appendTo(fieldSelector);
  });
  $(`<button type="submit" class="submitButton button"> Submit</button > `).appendTo(fieldSelector);
  return formMaker;
}

//resulting feedback if a selected answer is correct
//increments user score by one
function correctAnswer() {
  $('.response').html(
    `<h3>Your answer is correct... Vamos!</h3>
    <img src="images/correct.jpg" alt="rafeal-nadal-fist-pump" class="images" width="200px">
      <p class="sizeMe">On to your next question!</p>
      <button type="button" class="nextButton button">Next</button>`
  );
  updateScore();
}

//resulting feedback if a selected answer is incorrect
function wrongAnswer() {
  $('.response').html(
    `<h3>That's the wrong answer... <b>You cannot be serious!</b></h3>
    <img src="images/wrong.jpg" alt="dissapointed monkey face" class="images" width="200px">
    <p class="sizeMe">It's actually:</p>
    <p class="sizeMe">${STORE[questionNumber].correctAnswer}</p>
    <button type="button" class="nextButton button">Next</button>`
  );
}

//generates the next question
function nextQuestion() {
  $('.stadiumBox').on('click', '.nextButton', function (event) {
    $('.altBox').hide();
    $('.questionBox').show();
    updateQuestionNumber();
    $('.questionBox form').replaceWith(generateQuestion());
  });
}

//determines final score and feedback at the end of the quiz
function finalScore() {
  $('.final').show();

  const great = [
    'Game. Set. Match!',
    'images/great.jpg',
    'Nadal lifting trophy',
    "Perfect score... You're a true champion!"
  ];

  const good = [
    'Good, not great.',
    'images/good.jpg',
    'Roddick fist pump',
    "You're almost a tennis expert..."
  ];

  const bad = [
    'Still a rookie?',
    'images/end.jpg',
    'baghdatis racquet smash',
    'Everyone starts somewhere!'
  ];

  if (score >= 7) {
    array = great;
  } else if (score < 7 && score >= 5) {
    array = good;
  } else {
    array = bad;
  }
  return $('.final').html(
    `<h3>${array[0]}</h3>
      <img src="${array[1]}" alt="${array[2]}" class="images">
        <h3>Your score is ${score} / 8</h3>
        <p class="sizeMe">${array[3]}</p>
        <button type="submit" class="restartButton button">Restart</button>`
  );
}

//takes user back to the starting view to restart the quiz
function restartQuiz() {
  $('.stadiumBox').on('click', '.restartButton', function (event) {
    event.preventDefault();
    resetStats();
    $('.altBox').hide();
    $('.startQuiz').show();
  });
}

//runs the functions
function makeQuiz() {
  startQuiz();
  generateQuestion();
  submitAnswer();
  nextQuestion();
  restartQuiz();
}

$(makeQuiz);
