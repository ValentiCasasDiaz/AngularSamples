import { CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UpperCasePipe, LowerCasePipe, JsonPipe, DecimalPipe, DatePipe, CurrencyPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'PipesLesson';
  user = { id: 0, name: 'Pere', age: 18, img: 'https://picsum.photos/200' };
  num = 103.1234;
  birthday = new Date(2023, 3, 2);
  cost = 4560.34;

  // Las pipes DecimalPipe, DatePipe y CurrencyPipe funcionan con el Locale, eso implica
  // que se tiene que actualizar para que salgan con el formato correcto
  /*
    En el archivo angular.json se tiene que añadir el siguiente código:

    ...
    "NombreProyecto": {
      "i18n": {
          "sourceLocale": "es"
        },
    ...

  */
}
