import { Pipe, PipeTransform } from '@angular/core';
import { Usuario } from '../models/usuario.model';

@Pipe({
    standalone: true,
    name: 'userFilter',
})

export class UserFilterPipe implements PipeTransform {

    // Aquí tenemos la función que tenemos que implementar, en este caso el 1r parámetro de la función
    // es el objeto sobre el que aplicamos la Pipe, el 2o y 3o son parámetros adicionales que le ponemos nosotros
    transform(usuarios: Usuario[], edad: number, nombre: string): Usuario[] {

        return usuarios.filter((value: Usuario) => {
            // Filtramos los usuarios que tengan la misma edad o más y que incluyan el string pertinente
            return (value.edad >= edad && value.nombre.includes(nombre));
        });

    }
}