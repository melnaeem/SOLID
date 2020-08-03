class Question {
  constructor(description) {
    this.description = description;
  }

  printChoices(choices) {
    console.log(choices);
  }

  printDescription() {
    console.log(this.description);
  }
}

class BooleanQuestion extends Question {
  constructor(description) {
    super(description);
  }

  printChoices() {
    super.printChoices('1. True');
    super.printChoices('3. False');
  }
}

class MultiChoiceQuestion extends Question {
  constructor(description, options) {
    super(description);
    this.options = options;
  }

  printChoices() {
    this.options.forEach((option, index) => {
      super.printChoices(`${index + 1}. ${option}`);
    });
  }
}

class TextQuestion extends Question {
  constructor(description) {
    super(description);
  }

  printChoices() {
    super.printChoices('Answer: __________________');
  }
}

class RangeQuestion extends Question {
  constructor(description) {
    super(description);
  }

  printChoices() {
    super.printChoices('Minimum: __________________');
    super.printChoices('Maximum: __________________');
  }
}

function printAllQuestions(questions) {
  questions.forEach(question => {
    question.printDescription();
    question.printChoices();

    console.log(''); // to print new line between each question
  });
}

const Questions = [
  new BooleanQuestion('This is a true/false question'),
  new MultiChoiceQuestion(
    'What is your favourite language?',
    ['HTML', 'CSS', 'JS', 'Python']
  ),
  new TextQuestion('Descrie your favourite JS feature'),
  new BooleanQuestion('This is a true/false question'),
]

printAllQuestions(Questions);