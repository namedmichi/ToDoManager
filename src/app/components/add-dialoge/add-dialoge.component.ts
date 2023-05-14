import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup} from '@angular/forms';
import  {Inject} from '@angular/core';
import { values } from 'src/app/app.component';



@Component({
  selector: 'app-add-dialoge',
  templateUrl: './add-dialoge.component.html',
  styleUrls: ['./add-dialoge.component.css']
})
export class AddDialogeComponent implements OnInit {

  form: FormGroup;
  description: string
  title: string
  beschreibung: string
  status: string
  subtask: string
  activeSections: string[] = values.activeSections;
  constructor (  
    private fb: FormBuilder, 
    public dialogRef: MatDialogRef<AddDialogeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){
      this.description = data.description;
    }

  ngOnInit(): void {
    
    this.form = this.fb.group({
      description: [this.description, []],
      title: [this.title, []],
      beschreibung: [this.beschreibung, []],
      subtask: [this.subtask, []],
      status: [this.status, []],
    })
  }

 save(){
  this.dialogRef.close(this.form.value);
 }
 close(){
  this.dialogRef.close();
 
 }
 setStatus(status: string = "t"){
  console.log(status)
  this.status = status
  this.form.patchValue({status: status})
  var boards = document.getElementsByClassName('statusCard')
  for (let i = 0; i < boards.length; i++) {
    boards[i].classList.remove("active");
  }
  document.getElementById(status)?.classList.add('active')
 }

}
