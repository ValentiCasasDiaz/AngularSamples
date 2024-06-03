import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '2-ControlFlowLesson';
  
  isUserLogged = true;
  userBookmarks = [{id:0, url:'https://youtube.com'}, {id:1, url:'https://gmail.com'}, {id:2, url:'https://google.com'}];
  myMap = new Map([["firstName", "Angular"],["lastName", "Framework"]]);

}
