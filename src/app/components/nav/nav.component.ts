import { Component } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { AddDialogeComponent } from '../add-dialoge/add-dialoge.component';
import { createTask, Task } from 'src/app/task';
import { values } from 'src/app/app.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
   
  }

  openDialog() {
    const config: MatDialogConfig = {
      disableClose: false,
      hasBackdrop: true,
      backdropClass: '',
      width: '650px',
      height: '',
      position: {
          top: '50vh',
          left: '50vw'
      },
      panelClass:'makeItMiddle',
  };
    config.data = {
      description: 'Neuen Task Erstellen'
    };



    const dialogRef = this.dialog.open(AddDialogeComponent, config);


    dialogRef.afterClosed().subscribe(
      data => {
        values.selectedBoard.tasks.push(  createTask(data.title, data.beschreibung, data.subtask, data.status))
        console.log(values.selectedBoard.tasks)
      }
      )
  }

}

