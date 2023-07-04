import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-questions',
  templateUrl: './upload-questions.component.html',
  styleUrls: ['./upload-questions.component.css']
})
export class UploadQuestionsComponent implements OnInit {
  selectedFile: File | null = null;

  constructor() { }

  ngOnInit(): void {
  }


  handleFileInput(event: any) {
    this.selectedFile = event.target.files[0];
  }

  submitQuestions() {
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        const fileContent = reader.result as string;
        console.log(fileContent);
      };
      reader.readAsText(this.selectedFile);
    } else {
      console.log("No file selected.");
    }
  }
  
}
