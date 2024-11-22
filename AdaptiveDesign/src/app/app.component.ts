import { Component } from '@angular/core';
import { LoginpageComponent } from "./loginpage/loginpage.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginpageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AdaptiveDesign';
}
