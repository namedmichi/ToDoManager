import { Component } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup} from '@angular/forms';
import  {Inject} from '@angular/core';
import { values } from 'src/app/app.component';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-card-settings-dialog',
  templateUrl: './card-settings-dialog.component.html',
  styleUrls: ['./card-settings-dialog.component.css']
})

export class CardSettingsDialogComponent {
  task: Task;
  form: FormGroup;
  TaskNameInput: string;
  constructor (  
    private fb: FormBuilder, 
    public dialogRef: MatDialogRef<CardSettingsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){
      this.task = data.task;
    }

  ngOnInit(): void {
    
    this.form = this.fb.group({
      TaskNameInput: [this.TaskNameInput, []],
    })
  }

 save(){
  this.dialogRef.close(this.form.value);
 }
 close(){
  this.dialogRef.close();
 
 }
 
 deletTask(task: Task){
  console.log(task);
  values.selectedBoard.tasks.splice(values.selectedBoard.tasks.indexOf(task), 1);
  this.dialogRef.close();
}
renameTask(){
  this.dialogRef.close(this.form.value);
}
}
