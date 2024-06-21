import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Usuario } from './models/usuario.model';
import { UserFilterPipe } from './pipes/user-filter.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserFilterPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CustomPipesLesson';

  usuarios: Usuario[] = [
    { id:0, nombre:'Ana', edad: 25 },
    { id:1, nombre:'Jose', edad: 17 },
    { id:2, nombre:'Laura', edad: 20 },
    { id:3, nombre:'Alberto', edad: 25 },
    { id:4, nombre:'Berta', edad: 15 }
  ];
}
