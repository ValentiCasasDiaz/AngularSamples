import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { BasketItem } from '../interficies/basket_item.interface';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  // https://medium.com/@jaydeepvpatil225/observables-and-subjects-in-angular-a4d73dfa5bb

  // El Subject es muy parecido a un EventEmitter (Output), ya que informa a todos
  // los elementos subscritos el mismo valor
  private subject = new BehaviorSubject<BasketItem[]>([]);

  // El Observable informa a cada elemento individualmente, en este caso lo usaremos
  // para informar a los componentes de la lista de objetos de la cesta
  private items$: Observable<BasketItem[]> = this.subject.asObservable();

  constructor() { }

  // Obtenemos la lista de todos los productos de la cesta
  getItems(): Observable<BasketItem[]>{
    return this.items$;
  }

  // Obtenemos la cantidad de todos los productos de la cesta
  getAmountItems(): Observable<number> {
    return this.getItems().pipe(
      // El operador "map" permite modificar el BasketItem[] y convertirlo en el total de objetos de la cesta
      map((value: BasketItem[]) => {
        let totalAmount: number = 0;

        value.forEach(item => totalAmount += item.amount);

        return totalAmount;
      })
    );
  }

  // Añadimos un producto a la cesta
  addItem(basketItem: BasketItem) {
    
    // Cogemos los valores del array
    const items: BasketItem[] = this.subject.getValue();

    // Buscamos si el elemento ya existe en el array (o sea, si ya estaba en la cesta)
    const productIndex = items.findIndex(item => item.product.id === basketItem.product.id);
    
    if (productIndex >= 0) {
      // Si ya estaba en la cesta, incrementamos la cantidad en 1
      items[productIndex].amount +=1;
    } else {
      // Si no estaba en la cesta lo añadimos
      items.push(basketItem)
    }

    // Actualizamos la lista de productos en el Subject para que todos los Observables informen los cambios
    this.subject.next(items);
  }

}
