class Basic {
    constructor(titleStr) {
        this.title = titleStr;
    }
}

class Answer extends Basic {
    answer; isValid;
    constructor(titleStr, isValid) {
        super(titleStr);
        this.answer = false;
        this.isValid = isValid;
    }
    setTrue() {
        this.answer = true;
    }
    get isAnswerCorrect() {
        return this.isValid && this.answer === this.isValid;
    }
}

class Question extends Basic {
    answers = [];
    constructor(titleStr) {
        super(titleStr);
    }

    addAnswerVariant(answer) {
        this.answers.push(answer);
    }

    get isAnswerValid() {
        return this.answers.some(answer => answer.isAnswerCorrect) ? 1 : 0;
    }

    getQuestion() {
        return { title: this.title, answers: this.answers.map(answer => answer.title)}
    }
}

class SeveralAnswersQuestion extends Question {
    countOfCorrectAnswers = 0;
    hasMultipleAnswers = true;

    constructor(titleStr) {
        super(titleStr);
    }

    get isAnswerValid() {
        return this.countOfCorrectAnswers ? this.answers.filter(answer => answer.isAnswerCorrect).length / this.countOfCorrectAnswers : 0;
    }

    addAnswerVariant(answer) {
        this.answers.push(answer);
        this.countOfCorrectAnswers += answer.isValid ? 1 : 0;
    }
}

class Test extends Basic {
    questions = [];
    currentQuestion = -1;
    constructor(titleStr) {
        super(titleStr);
    }
    addQuestion(question) {
        this.questions.push(question);
    }
    getResults() {
        return this.questions.length < 1 ? null : this.questions.reduce((total, question) => {
            total += question.isAnswerValid;
            return total;
        } , 0) / this.questions.length;
    }

    getNextQuestion() {
        if (++this.currentQuestion >= this.questions.length) {
            this.currentQuestion = -1;
            return null;
        }
        return this.questions[this.currentQuestion];
    }
}

const myTest = new Test("Перевірка знань");
const question1 = new Question("Запитання 1");
question1.addAnswerVariant(new Answer("Відповідь 1 на запитання 1", false));
question1.addAnswerVariant(new Answer("Відповідь 2 на запитання 1", true));
question1.addAnswerVariant(new Answer("Відповідь 3 на запитання 1", false));

const question2 = new SeveralAnswersQuestion("Запитання 2");
question2.addAnswerVariant(new Answer("Відповідь 1 на запитання 2", false));
question2.addAnswerVariant(new Answer("Відповідь 2 на запитання 2", true));
question2.addAnswerVariant(new Answer("Відповідь 3 на запитання 2", false));
question2.addAnswerVariant(new Answer("Відповідь 4 на запитання 2", true));

myTest.addQuestion(question1);
myTest.addQuestion(question2);

function startQuiz(quiz) {
    let question;
    do {
        question = quiz.getNextQuestion();
        if (question) {
            const answers = prompt(`${question.title}
${question.answers.map(answer => "  " + answer.title).join("\n")}
Введить ${question.hasMultipleAnswers ? "декілька відповідей, розділених комой" : "номер правильної відповіді"}`, "")
                .replace(/[^\d,]/g, "").split(",")
            answers.forEach(answerNum => {
                question.answers[answerNum - 1].setTrue();
            });
        }
    } while(question);
    alert("Результат проходження тесту: " + quiz.getResults());
}

startQuiz(myTest);