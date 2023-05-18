import { Component, OnInit } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-make-test-structure',
  templateUrl: './make-test-structure.component.html',
  styleUrls: ['./make-test-structure.component.css']
})
export class MakeTestStructureComponent implements OnInit {

  public Editor = ClassicEditor;

  constructor() { }

  ngOnInit(): void {
  }

}
