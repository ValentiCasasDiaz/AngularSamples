import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {

  name: string[] = ['Juan','Manolo','Sergio','Luis','Claudia','Rosa','Marta','Rita'];

  getRandomStudentName() {
    // Generamos un número al azar entre 0 y el número de elementos del array -1
    const idx = Math.floor(Math.random() * this.name.length);
    return this.name[idx];
  }

}
