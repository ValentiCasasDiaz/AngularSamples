import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ConditionalStylesLesson';
  checked: boolean = false;

  getButtonClass() {
    return {
      btn: true,
      'btn-primary': this.checked == true,
      'btn-secondary': this.checked == false,
    };
  }

  calcularEstilo() {
    return {
      background: 'yellow',
      width: '300px'
    };
  }
}
