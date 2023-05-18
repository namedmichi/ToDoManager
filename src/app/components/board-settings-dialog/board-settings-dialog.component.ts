import { Component } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup} from '@angular/forms';
import  {Inject} from '@angular/core';
import { values } from 'src/app/app.component';
import { Task } from 'src/app/task';
import { Board } from 'src/app/board';

@Component({
  selector: 'app-board-settings-dialog',
  templateUrl: './board-settings-dialog.component.html',
  styleUrls: ['./board-settings-dialog.component.css']
})
export class BoardSettingsDialogComponent {
  task: Task;
  form: FormGroup;
  selectedBoard: Board;
  boardNameInput: string;
  constructor (  
    private fb: FormBuilder, 
    public dialogRef: MatDialogRef<BoardSettingsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){
      this.task = data.task;
    }

  ngOnInit(): void {
    this.selectedBoard = values.selectedBoard;	
    this.form = this.fb.group({
      boardNameInput: [this.boardNameInput, []],
    })
  }

 save(){
  this.dialogRef.close(this.form.value);
 }
 close(){
  this.dialogRef.close();
 
 }
 
 deletBoard(Board: Board){
  console.log(Board);
  values.boards.splice(values.boards.indexOf(Board),1); 
  this.dialogRef.close();
}
changeBoardName(){
  this.dialogRef.close(this.form.value);

}
}
