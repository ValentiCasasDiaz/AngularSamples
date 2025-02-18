import { Routes } from '@angular/router';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { BasketPageComponent } from './pages/basket-page/basket-page.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'products' },
    { path: 'products', title: 'Productes', component: ProductsPageComponent },
    { path: 'basket', title: 'Cistella', component: BasketPageComponent }
];
