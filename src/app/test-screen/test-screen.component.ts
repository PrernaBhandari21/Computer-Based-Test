import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-screen',
  templateUrl: './test-screen.component.html',
  styleUrls: ['./test-screen.component.css']
})
export class TestScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  currentQuestionIndex = 0;
  totalQuestions = 10;
  questionList = Array.from({ length: this.totalQuestions }).fill(0); // Placeholder for question list

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
    ['Yen', 'Dollar', 'Euro', 'Pound Sterling']
  ];

  currentQuestion: string = this.questions[0];
  currentQuestionOptions: string[] = this.options[0];
  selectedOption: number | null = null;

  navigateToQuestion(index: number): void {
    this.currentQuestionIndex = index;
    this.currentQuestion = this.questions[index];
    this.currentQuestionOptions = this.options[index];
    this.selectedOption = null; // Reset the selected option
  }
}
