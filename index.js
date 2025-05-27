// Your code here
var questionsArr = [
    {
        question: '2 + 2 = 5.',
        answer: false
    },
    {
        question: 'The Earth revolves around the moon.',
        answer: false
    },
    {
        question: 'HTML stands for HyperText Markup Language.',
        answer: true
    },
    {
        question: 'Marvels Blank Panther is actually pink',
        answer: false
    },
    {
        question: 'Mulan is not a princess.',
        answer: true
    },
    {
        question: 'The center of the earth is composed of ice',
        answer: false
    },
    {
        question: 'Spongebobs best friend is Patrick.',
        answer: true
    },
    {
        question: 'The average American reads 12 books a year.',
        answer: true
    }
];

function runQuiz() {
    var score = 0;

    for (var i = 0; i < questionsArr.length; i++) {
        var userAnswer = confirm(questionsArr[i].question);

        if (userAnswer === questionsArr[i].answer) {
            score++;
        }
    }

    var percentage = Math.round((score / questionsArr.length) * 100);

    alert("You got " + percentage + "% correct!");
}