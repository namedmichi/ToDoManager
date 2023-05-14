import { Component } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup} from '@angular/forms';
import  {Inject} from '@angular/core';
import { values } from 'src/app/app.component';
import { Task } from 'src/app/task';
import { Subtask } from 'src/app/subtask';
import { findIndex } from 'rxjs';


@Component({
  selector: 'app-card-dialog',
  templateUrl: './card-dialog.component.html',
  styleUrls: ['./card-dialog.component.css']
})
export class CardDialogComponent {
  i: number = 1;
  task: Task;
  form: FormGroup;
  
  activeSections: string[] = values.activeSections;
  
  constructor (  
    private fb: FormBuilder, 
    public dialogRef: MatDialogRef<CardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){
      this.task = data.task;
    }

  ngOnInit(): void {
    
    this.form = this.fb.group({

    })
  }

 save(){
  this.dialogRef.close(this.form.value);
 }
 close(){
  this.dialogRef.close();
 
 }
 changeStatus(status: string, Task: Task){
  console.log("test")
  	values.selectedBoard.tasks[values.selectedBoard.tasks.indexOf(Task)].Status = status;
    console.log(values.selectedBoard.tasks[values.selectedBoard.tasks.indexOf(Task)].Status)
 }
 test(){
  console.log("test")
 
 }
 changeSubtaskStatus(Status: string, Task: Task,  subTaskItem: Subtask){
  console.log("test")

  if(Status == "Offen"){
    values.selectedBoard.tasks[values.selectedBoard.tasks.indexOf(Task)].Subtasks[ values.selectedBoard.tasks[values.selectedBoard.tasks.indexOf(Task)].Subtasks.indexOf(subTaskItem)].Status = "Fertig"
  }
  if(Status == "Fertig"){
    values.selectedBoard.tasks[values.selectedBoard.tasks.indexOf(Task)].Subtasks[ values.selectedBoard.tasks[values.selectedBoard.tasks.indexOf(Task)].Subtasks.indexOf(subTaskItem)].Status = "Offen"
  }

 
 }

 }
