import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // El service es una clase que sirve para gestionar la información entre diferentes partes de la web,
  // además en este 'service' sabemos que podemos encontrar toda la lógica referente a los usuarios

  users: User[] = [
    { id: 0, name: 'John', age: 18, img: 'https://picsum.photos/id/22/200/200' }, 
    { id: 1, name: 'Maria', age: 25, img: 'https://picsum.photos/id/31/200/200' }, 
    { id: 2, name: 'Lucy', age: 30, img:  'https://picsum.photos/id/65/200/200' }, 
    { id: 3, name: 'Jason', age: 22, img: 'https://picsum.photos/id/48/200/200' }
  ];

  constructor() { }

  // Operación de Crear (Create)
  createRandomUser() {

    // El operador 'map' nos sirve para modificar los elementos de un array
    // y/o crear uno nuevo a partir de las modificaciones. En este caso,
    // con el operador 'map' nos quedamos con los ID de cada usuario y hacemos un array de numbers
    const ids: number[] = this.users.map((value: User) => value.id);

    // Usamos el operador 'max' para que nos retorne el mayor
    const id = Math.max(...ids);
    
    // Lo añadimos al array de usuarios
    this.users.push({
      id: id,
      name: 'Jane',
      age: (Math.round(Math.random() * 15)) + 15,
      img: 'https://picsum.photos/id/64/200/200'
    });
  }

  // Operación de Lectura (Read)
  getUsers(): User[] {
    return this.users;
  }

  // Operación de Actualizar (Update)
  updateUserAge(userId: number, age: number): void {
    
    // El operador 'map' nos sirve para modificar los elementos de un array
    // y/o crear uno nuevo a partir de las modificaciones. En este caso,
    // solamente modificamos el array original 
    this.users.map((value: User) => {
      if (value.id == userId) {
        value.age = age;
      }
    });
  }

  // Operación de Borrado (Delete)
  deleteUser(userId: number): void {

    // Guardamos en el array de usuarios, los usuarios filtrados, de esta manera
    // solamente los que nosotros queramos seguirán en el array
    this.users = this.users.filter((value: User) => {

      // Devuelte TRUE siempre que no sea el que nos han pasado, de esta manera,
      // solamente nos quedamos los que tengan ID diferente en el nuevo array filtrado
      return (value.id != userId);
    });
  }
}

// Interfaz para especificar que es un Usuario
export interface User {
  id: number;
  name: string;
  age: number;
  img: string;
}
