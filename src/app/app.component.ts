import { Component } from '@angular/core';
import { NotesServiceService } from './notes-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'notepad-app';
  notes=[]
  isHidden:any;
  constructor(private router:Router,private _notes:NotesServiceService) { }
  ngOnInit(): void {
    this.notes=this._notes.notes;
    this.isHidden=this._notes.isHidden;
  }

  addNotes(){
    this.isHidden=true;
    this.router.navigate(['/addNotes']);
  }

}
