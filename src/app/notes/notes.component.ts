import { Component, OnInit } from '@angular/core';
import { ChildActivationStart, Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { NotesServiceService } from '../notes-service.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notesList:any=[]
  constructor(private _notes:NotesServiceService,private _router:Router,private _appcomp:AppComponent) { }
  titlevalue="";
  notesvalue="";
  issHidden:boolean | undefined;
  ngOnInit(): void {
    this.notesList=this._notes.notes;
    this.issHidden=this._notes.isHidden;
    // this.issHidden=false

  }
  saveNotes(data:any){
    this.notesList.push(data);
    console.log(this.notesList);
    this.titlevalue="";
    this.notesvalue="";
    this.issHidden=true;

    this._router.navigate(['/displayNotes']);
  }
}
