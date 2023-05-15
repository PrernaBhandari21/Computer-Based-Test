import { Component, OnInit, ViewChild } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-manage-questions',
  templateUrl: './manage-questions.component.html',
  styleUrls: ['./manage-questions.component.css']
})
export class ManageQuestionsComponent implements OnInit {


  selectedCategory!: string;
  categories: string[] = ['Individual', 'Group', 'Corporate', 'Student'];
  isDisabled: boolean = true;
  showAddContent: boolean = false;
  showViewContent: boolean = false;

  showQuesContent: string = '';

  public Editor = ClassicEditor;

  
  constructor() { }

  ngOnInit(): void {
  }

  updateShowQuesContent(event: any): void {
    console.log(event.editor.getData());
    this.showQuesContent = event.editor.getData();
  }

  saveContent(): void {
    alert("Question Added !")
    console.log(this.showQuesContent);
    this.showQuesContent = '';
  }

  onCategoryChange() {
    this.isDisabled = false;
  }



  onAddButtonClick() {
    this.showAddContent = true;
    this.showViewContent = false;
  }

  onViewButtonClick() {
    this.showAddContent = false;
    this.showViewContent = true;
  }
}
