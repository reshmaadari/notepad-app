import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DisplayNotesComponent } from './display-notes/display-notes.component';
import { NotesComponent } from './notes/notes.component';

const routes: Routes = [
  // {path:'',redirectTo:"addNotes",pathMatch:"full"},
  {path:'addNotes',component:NotesComponent},
  {path:'displayNotes',component:DisplayNotesComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
