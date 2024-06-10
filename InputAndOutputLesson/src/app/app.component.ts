import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from "./counter/counter.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CounterComponent]
})
export class AppComponent {
  title = 'InputAndOutputLesson';
  counters: Counter[] = [{id: 0, name: 'Contador 1', count: 0}, {id: 1, name: 'Contador 2', count: 2}]

  onCountChanged(counter: Counter) {
    
    // Buscamos el contador modificado (counter) por su ID y le actualizamos los valores
    this.counters.map((value: Counter) => {
      
      // Solamente modificamos el que tenga el mismo ID
      if (value.id == counter.id) {
        value.name = counter.name;
        value.count = counter.count;
      }

    });
  }
}

// Interfaz que nos sirve para saber que propiedades tiene un objeto de tipo "Counter"
export interface Counter {
  id: number;
  name: string;
  count: number;
}
