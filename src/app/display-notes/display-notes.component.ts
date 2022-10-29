import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { NotesServiceService } from '../notes-service.service';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.css']
})
export class DisplayNotesComponent implements OnInit {
  isHidden=false
  constructor(private _notes:NotesServiceService,private _router:Router) { }
  notes:any

  ngOnInit(): void {
    // this._notes.notes.subscribe(data=>this.notes=data);
    
    this.notes=this._notes.notes;
  }
  addNotes(){
    this.isHidden=true;
    this._router.navigate(['/addNotes']);
  }
  delete(i:any){
    this.notes.splice(i,1)
    // this._notes.notes= this.notes
  this.isHidden = false    
}}
