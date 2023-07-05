import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InstructionPageComponent } from '../instruction-page/instruction-page.component';
import { ExamCompletionScreenComponent } from '../student/exam-completion-screen/exam-completion-screen.component';

@Component({
  selector: 'app-test-screen',
  templateUrl: './test-screen.component.html',
  styleUrls: ['./test-screen.component.css']
})
export class TestScreenComponent implements OnInit {

  constructor(    private dialog : MatDialog
    ) { }

  ngOnInit(): void {
  }
  currentQuestionIndex = 0;
  totalQuestions = 60;
  questionList: (number | null)[] = Array.from({ length: this.totalQuestions }, () => null); // Placeholder for question list

  questions: string[] = [
    'What is the capital of France?',
    'Who is the author of "To Kill a Mockingbird"?',
    'What is the chemical symbol for gold?',
    'What is the largest planet in our solar system?',
    'Which country won the FIFA World Cup in 2018?',
    'What is the formula for water?',
    'Who painted the Mona Lisa?',
    'Which scientist developed the theory of relativity?',
    'What is the main component of air?',
    'What is the currency of Japan?',
    'What is the capital of France?',
    'Who is the author of "To Kill a Mockingbird"?',
    'What is the chemical symbol for gold?',
    'What is the largest planet in our solar system?',
    'Which country won the FIFA World Cup in 2018?',
    'What is the formula for water?',
    'Who painted the Mona Lisa?',
    'Which scientist developed the theory of relativity?',
    'What is the main component of air?',
    'What is the currency of Japan?',
    'What is the capital of France?',
    'Who is the author of "To Kill a Mockingbird"?',
    'What is the chemical symbol for gold?',
    'What is the largest planet in our solar system?',
    'Which country won the FIFA World Cup in 2018?',
    'What is the formula for water?',
    'Who painted the Mona Lisa?',
    'Which scientist developed the theory of relativity?',
    'What is the main component of air?',
    'What is the currency of Japan?',
    'What is the capital of France?',
    'Who is the author of "To Kill a Mockingbird"?',
    'What is the chemical symbol for gold?',
    'What is the largest planet in our solar system?',
    'Which country won the FIFA World Cup in 2018?',
    'What is the formula for water?',
    'Who painted the Mona Lisa?',
    'Which scientist developed the theory of relativity?',
    'What is the main component of air?',
    'What is the currency of Japan?',
    'What is the capital of France?',
    'Who is the author of "To Kill a Mockingbird"?',
    'What is the chemical symbol for gold?',
    'What is the largest planet in our solar system?',
    'Which country won the FIFA World Cup in 2018?',
    'What is the formula for water?',
    'Who painted the Mona Lisa?',
    'Which scientist developed the theory of relativity?',
    'What is the main component of air?',
    'What is the currency of Japan?',
    'What is the capital of France?',
    'Who is the author of "To Kill a Mockingbird"?',
    'What is the chemical symbol for gold?',
    'What is the largest planet in our solar system?',
    'Which country won the FIFA World Cup in 2018?',
    'What is the formula for water?',
    'Who painted the Mona Lisa?',
    'Which scientist developed the theory of relativity?',
    'What is the main component of air?',
    'What is the currency of Japan?'
  ];

  options: string[][] = [
    ['London', 'Paris', 'Berlin', 'Rome'],
    ['Harper Lee', 'F. Scott Fitzgerald', 'Mark Twain', 'J.D. Salinger'],
    ['Au', 'Ag', 'Fe', 'Hg'],
    ['Jupiter', 'Saturn', 'Mars', 'Neptune'],
    ['France', 'Brazil', 'Germany', 'Argentina'],
    ['H2O', 'CO2', 'NaCl', 'O2'],
    ['Leonardo da Vinci', 'Pablo Picasso', 'Vincent van Gogh', 'Michelangelo'],
    ['Albert Einstein', 'Isaac Newton', 'Galileo Galilei', 'Charles Darwin'],
    ['Nitrogen', 'Oxygen', 'Carbon dioxide', 'Argon'],
    ['Yen', 'Dollar', 'Euro', 'Pound Sterling'],
    ['London', 'Paris', 'Berlin', 'Rome'],
    ['Harper Lee', 'F. Scott Fitzgerald', 'Mark Twain', 'J.D. Salinger'],
    ['Au', 'Ag', 'Fe', 'Hg'],
    ['Jupiter', 'Saturn', 'Mars', 'Neptune'],
    ['France', 'Brazil', 'Germany', 'Argentina'],
    ['H2O', 'CO2', 'NaCl', 'O2'],
    ['Leonardo da Vinci', 'Pablo Picasso', 'Vincent van Gogh', 'Michelangelo'],
    ['Albert Einstein', 'Isaac Newton', 'Galileo Galilei', 'Charles Darwin'],
    ['Nitrogen', 'Oxygen', 'Carbon dioxide', 'Argon'],
    ['Yen', 'Dollar', 'Euro', 'Pound Sterling'],
    ['London', 'Paris', 'Berlin', 'Rome'],
    ['Harper Lee', 'F. Scott Fitzgerald', 'Mark Twain', 'J.D. Salinger'],
    ['Au', 'Ag', 'Fe', 'Hg'],
    ['Jupiter', 'Saturn', 'Mars', 'Neptune'],
    ['France', 'Brazil', 'Germany', 'Argentina'],
    ['H2O', 'CO2', 'NaCl', 'O2'],
    ['Leonardo da Vinci', 'Pablo Picasso', 'Vincent van Gogh', 'Michelangelo'],
    ['Albert Einstein', 'Isaac Newton', 'Galileo Galilei', 'Charles Darwin'],
    ['Nitrogen', 'Oxygen', 'Carbon dioxide', 'Argon'],
    ['Yen', 'Dollar', 'Euro', 'Pound Sterling'],
    ['London', 'Paris', 'Berlin', 'Rome'],
    ['Harper Lee', 'F. Scott Fitzgerald', 'Mark Twain', 'J.D. Salinger'],
    ['Au', 'Ag', 'Fe', 'Hg'],
    ['Jupiter', 'Saturn', 'Mars', 'Neptune'],
    ['France', 'Brazil', 'Germany', 'Argentina'],
    ['H2O', 'CO2', 'NaCl', 'O2'],
    ['Leonardo da Vinci', 'Pablo Picasso', 'Vincent van Gogh', 'Michelangelo'],
    ['Albert Einstein', 'Isaac Newton', 'Galileo Galilei', 'Charles Darwin'],
    ['Nitrogen', 'Oxygen', 'Carbon dioxide', 'Argon'],
    ['Yen', 'Dollar', 'Euro', 'Pound Sterling'],
    ['London', 'Paris', 'Berlin', 'Rome'],
    ['Harper Lee', 'F. Scott Fitzgerald', 'Mark Twain', 'J.D. Salinger'],
    ['Au', 'Ag', 'Fe', 'Hg'],
    ['Jupiter', 'Saturn', 'Mars', 'Neptune'],
    ['France', 'Brazil', 'Germany', 'Argentina'],
    ['H2O', 'CO2', 'NaCl', 'O2'],
    ['Leonardo da Vinci', 'Pablo Picasso', 'Vincent van Gogh', 'Michelangelo'],
    ['Albert Einstein', 'Isaac Newton', 'Galileo Galilei', 'Charles Darwin'],
    ['Nitrogen', 'Oxygen', 'Carbon dioxide', 'Argon'],
    ['Yen', 'Dollar', 'Euro', 'Pound Sterling'],
    ['London', 'Paris', 'Berlin', 'Rome'],
    ['Harper Lee', 'F. Scott Fitzgerald', 'Mark Twain', 'J.D. Salinger'],
    ['Au', 'Ag', 'Fe', 'Hg'],
    ['Jupiter', 'Saturn', 'Mars', 'Neptune'],
    ['France', 'Brazil', 'Germany', 'Argentina'],
    ['H2O', 'CO2', 'NaCl', 'O2'],
    ['Leonardo da Vinci', 'Pablo Picasso', 'Vincent van Gogh', 'Michelangelo'],
    ['Albert Einstein', 'Isaac Newton', 'Galileo Galilei', 'Charles Darwin'],
    ['Nitrogen', 'Oxygen', 'Carbon dioxide', 'Argon'],
    ['Yen', 'Dollar', 'Euro', 'Pound Sterling']
  ];

  currentQuestion: string = this.questions[0];
  currentQuestionOptions: string[] = this.options[0];
  selectedOption: number | null = null;

  navigateToQuestion(index: number): void {
    this.currentQuestionIndex = index;
    this.currentQuestion = this.questions[index];
    this.currentQuestionOptions = this.options[index];
    this.selectedOption = this.questionList[index]; // Set the selected option from questionList
  }
  


  openInstructionPage(){
    console.log("instructions");

    const dialogRef = this.dialog.open(InstructionPageComponent, {
      width: '70%', // Adjust the width as needed
    });

  }

  selectOption(optionIndex: number): void {
    this.selectedOption = optionIndex;
    this.questionList[this.currentQuestionIndex] = optionIndex; // Store the selected option in questionList
  }
  
  

  clearSelectedOption(questionIndex: number): void {
    this.selectedOption = null;
    this.questionList[questionIndex] = null;
  }


  submitTest() {

    const testAnswers: any = {};
    console.log("Submitted Answers:");
    for (let i = 0; i < this.totalQuestions; i++) {
      const question = `Q${i + 1}`;
      const selectedOption = this.questionList[i];
      testAnswers[question] = selectedOption;
      console.log(question, selectedOption);
    }
    console.log("Test Answers:", testAnswers);

    const dialogRef = this.dialog.open(ExamCompletionScreenComponent, {
      width: '400px' ,
      disableClose: true // Prevent closing the popup by clicking outside
    });
  }
  
  
  
}
