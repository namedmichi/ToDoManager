import { Component } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup} from '@angular/forms';
import  {Inject} from '@angular/core';

@Component({
  selector: 'app-section-dialog',
  templateUrl: './section-dialog.component.html',
  styleUrls: ['./section-dialog.component.css']
})
export class SectionDialogComponent {

  
  form: FormGroup;
  name: string


  constructor (  
    private fb: FormBuilder, 
    public dialogRef: MatDialogRef<SectionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){
      this.name = data.name;
    }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [this.name, []],
    })
  }

 save(){
  this.dialogRef.close(this.form.value);
 }
 close(){
  this.dialogRef.close();
 
 }
}
