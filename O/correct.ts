interface IQuestion extends IQuestionWithDescription{
  printChoices: Function;
}

interface IQuestionWithDescription {
  description: string;
  printDescription: Function;
}

class QuestionWithDescription implements IQuestionWithDescription {
  description: string;

  constructor(description: string) {
    this.description = description;
  }

  printDescription() {
    console.log(this.description);
  }
}


class BooleanQuestion extends QuestionWithDescription implements IQuestion {
  constructor(description: string) {
    super(description);
  }

  printChoices() {
    console.log('1. True');
    console.log('3. False');
  }
}

class MultiChoiceQuestion extends QuestionWithDescription implements IQuestion {
  options: string[];

  constructor(description: string, options: string[]) {
    super(description);
    this.options = options;
  }

  printChoices() {
    this.options.forEach((option, index) => {
      console.log(`${index + 1}. ${option}`);
    });
  }
}

class TextQuestion extends QuestionWithDescription implements IQuestion {
  constructor(description: string) {
    super(description);
  }

  printChoices() {
    console.log('Answer: __________________');
  }
}

class RangeQuestion extends QuestionWithDescription implements IQuestion {
  constructor(description: string) {
    super(description);
  }

  printChoices() {
    console.log('Minimum: __________________');
    console.log('Maximum: __________________');
  }
}

function printAllQuestions(questions: IQuestion[]) {
  questions.forEach(question => {
    question.printDescription();
    question.printChoices();
    console.log('');
  });
}

const Questions: IQuestion[] = [
  new BooleanQuestion('This is a true/false question'),
  new MultiChoiceQuestion(
    'What is your favourite language?',
    ['HTML', 'CSS', 'JS', 'Python']
  ),
  new TextQuestion('Describe your favourite JS feature'),
  new RangeQuestion('What is the speed limit in your city?')
];

printAllQuestions(Questions);