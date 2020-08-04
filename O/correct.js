
// class BooleanQuestion {
//   constructor(description) {
//     this.description = description;
//   }

//   printChoices() {
//     console.log('1. True');
//     console.log('3. False');
//   }
// }

// class MultiChoiceQuestion {
//   constructor(description, options) {
//     this.description = description;
//     this.options = options;
//   }

//   printChoices() {
//     this.options.forEach((option, index) => {
//       console.log(`${index + 1}. ${option}`);
//     });
//   }
// }

// class TextQuestion {
//   constructor(description) {
//     this.description = description;
//   }

//   printChoices() {
//     console.log('Answer: __________________');
//   }
// }

// class RangeQuestion {
//   constructor(description) {
//     this.description = description;
//   }

//   printChoices() {
//     console.log('Minimum: __________________');
//     console.log('Maximum: __________________');
//   }
// }

// function printAllQuestions(questions) {
//   questions.forEach(question => {
//     question.printDescription();
//     console.log(question.description)
//     question.printChoices();
//     // print new line between each question
//     console.log('');
//   });
// }

// const Questions = [
//   new BooleanQuestion('This is a true/false question'),
//   new MultiChoiceQuestion(
//     'What is your favourite language?',
//     ['HTML', 'CSS', 'JS', 'Python']
//   ),
//   new TextQuestion('Describe your favourite JS feature'),
//   new RangeQuestion('What is the speed limit in your city?')
// ];

// printAllQuestions(Questions);