import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-instruction-page',
  templateUrl: './instruction-page.component.html',
  styleUrls: ['./instruction-page.component.css']
})
export class InstructionPageComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<InstructionPageComponent>

  ) { }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close();
  }

}
