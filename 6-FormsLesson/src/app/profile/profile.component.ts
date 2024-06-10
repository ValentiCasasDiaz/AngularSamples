import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  // El FormGroup es la clase que agrupa todos los controles que ha de tener el formulario
  profileForm = new FormGroup({
    // Cada FormControl indica un único control del formulario
    name: new FormControl('', Validators.required), // El valor por defecto es '' y se especifia que es requerido  
    email: new FormControl('', [Validators.required, Validators.email]), // El valor por defecto es '', se especifia que es requerido y con formato email
  });

  // Función que se llama cuando se pulsa el botón de Submit del formulario
  onSubmit() {
    alert(this.profileForm.value.name + ' | ' + this.profileForm.value.email);
  }

}
