import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavComponent } from './components/nav/nav.component';
import { MainComponent } from './components/main/main.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AddDialogeComponent } from './components/add-dialoge/add-dialoge.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BoardDialogComponent } from './components/board-dialog/board-dialog.component';
import { SectionDialogComponent } from './components/section-dialog/section-dialog.component';
import { CardDialogComponent } from './components/card-dialog/card-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavComponent,
    MainComponent,
    AddDialogeComponent,
    BoardDialogComponent,
    SectionDialogComponent,
    CardDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddDialogeComponent]
})
export class AppModule { }
