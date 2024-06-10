import { Component, input, output } from '@angular/core';
import { Counter } from '../app.component';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  // NOTA IMPORTANTE: Todos los inputs son de lectura solo, no se pueden modificar.

  name = input<string>('Sin nombre'); // Input opcional, si no le pasamos ningún valor será 'Sin nombre', 
                                      // si no pusieramos nada seria 'undefined'

  count = input.required<number>(); // Input requerido, si no le pasamos ningún valor nos dará error
  id = input.required<number>(); // Input requerido, si no le pasamos ningún valor nos dará error

  countChanged = output<Counter>(); // Output que enviará un objeto de tipo Counter al componente padre

  onClick() {
    const counter: Counter = {id: this.id(), name: this.name(), count: this.count() + 1};

    // Enviamos la información mediante el Output
    this.countChanged.emit(counter);
  }

}
