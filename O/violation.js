function printQuiz(questions) {
  questions.forEach(question => {

    console.log(question.description);

    switch (question.type) {
      case 'boolean':
        console.log('1- True');
        console.log('3- False');
        break;
      case 'multiChoice':
        question.options.forEach((option, index) => {
          console.log(`${index + 1}- ${option}`);
        });
        break;
      case 'text':
        console.log('Answer: __________________');
        break;
      // To add more question we need to more cases which violates the Open/Closed principle
      case 'range':
        console.log('Minimum: __________________');
        console.log('Maximum: __________________');
        break;
      default:
        break;
    }
    console.log('');
  });
}

const Questions = [
  {
    type: 'boolean',
    description: 'This is a true/false question',
  },
  {
    type: 'multiChoice',
    description: 'What is your favourite language?',
    options: ['HTML', 'CSS', 'JS', 'Python']
  },
  {
    type: 'text',
    description: 'Descrie your favourite JS feature',
  },
  // To add more question we need to modify the printQuiz Function
  {
    type: 'range',
    description: 'What is the speed limit in your city?',
  }
];

printQuiz(Questions);