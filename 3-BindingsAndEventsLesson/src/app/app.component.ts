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
  title = '3-BindingsAndEventsLesson';

  photoUrls = ['https://picsum.photos/id/30/300/300', 'https://picsum.photos/id/31/300/300', 'https://picsum.photos/id/32/300/300'];
  buttonDisabled = false;
  msg = 'Pasa el ratón por encima';

  showSecretMsg() {
    this.msg = 'Disfruta de la magia de Angular !!';
  }

  hideSecretMsg() {
    this.msg = 'Pasa el ratón por encima';
  }

  onClickEvent() {
    this.buttonDisabled = !this.buttonDisabled;
  }
}
