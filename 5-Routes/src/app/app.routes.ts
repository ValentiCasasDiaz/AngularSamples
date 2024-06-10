import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
    {
        path: '',                       // Nombre de la ruta para acceder
        title: 'App Home Page',         // Título del contenido actual (aparece en la pestaña del navegador)
        component: HomeComponent,       // Componente que se mostrará
    },
    {
        path: 'user',                       
        title: 'User Detail Page',         
        component: UserComponent,
    },
];
