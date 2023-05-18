import { Component, OnInit } from '@angular/core';
import { values } from 'src/app/app.component';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { BoardDialogComponent } from '../board-dialog/board-dialog.component';
import { Board } from 'src/app/board';
import { MainComponent } from '../main/main.component';
import { functions } from 'src/app/app.component';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{

ngOnInit(): void {
  
}


  $boards = values.boards;

  constructor (public dialog: MatDialog) { 
    
  }
ngAfterViewInit(): void {
  functions.changeBordSelection(values.selectedBoard)  
  
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
      description: 'panda'
    };



    const dialogRef = this.dialog.open(BoardDialogComponent, config);


    dialogRef.afterClosed().subscribe(
      data => {
        this.addBoard(data.name)
      }
      )
  }
  addBoard(name:string){
    var board: Board = {
      id: values.boards.length + 1,
      name: name,
      tasks:  [],
      sections: ["Offen", "In Bearbeitung", "Fertig"]
    }
    values.boards.push(board)
    }
    selectBoard(board: Board){
      values.selectedBoard = board;
     values.activeSections = board.sections;
     functions.changeBordSelection(board)
    }
    hideSidebar(){

      
      document.getElementsByTagName('app-sidebar')[0].classList.add('hide')
    
    }
}
