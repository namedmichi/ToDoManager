import { Component, OnInit } from '@angular/core';
import { values } from 'src/app/app.component';
import { Board } from 'src/app/board';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { SectionDialogComponent } from '../section-dialog/section-dialog.component';
import { Task } from 'src/app/task';
import { CardDialogComponent } from '../card-dialog/card-dialog.component';
import { countSubtasks } from 'src/app/subtasks';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  $boards: Board[ ] = values.boards;
  values = values;
  countSubtasks = countSubtasks;
  ngOnInit(): void {
  
  }
  constructor (public dialog: MatDialog) { }

  openDialog() {
    const config: MatDialogConfig = {
      disableClose: false,
      hasBackdrop: true,
      backdropClass: '',
      width: '450px',
      height: '',
      position: {
          top: '50vh',
          left: '50vw'
      },
      panelClass:'makeItMiddle',
  };
    config.data = {
      description: 'panda'
    };



    const dialogRef = this.dialog.open(SectionDialogComponent, config);


    dialogRef.afterClosed().subscribe(
      data => {
        this.newSection(data.name)
      }
      )
  }
  newSection(name:string){

    values.selectedBoard.sections.push(name)

    console.log(values.selectedBoardIndex)
  }
  cardDialog(task: Task){
    const config: MatDialogConfig = {
      disableClose: false,
      hasBackdrop: true,
      backdropClass: '',
      width: '700px',
      height: '',
      position: {
          top: '50vh',
          left: '50vw'
      },
      panelClass:'cardDialogStyle',
  };
    config.data = {
      task: task,
    };



    const dialogRef = this.dialog.open(CardDialogComponent, config);


    
  }
}
