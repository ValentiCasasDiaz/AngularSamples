import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interficies/product.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url: string = 'https://picsum.photos/v2/list';

  // Para usar el HttpClient, tenéis que configurarlo en el app.config.ts
  constructor(
    private httpClient: HttpClient
  ) { }

  // Realizamos la petición al servidor, recordad que hay que tener una interface 
  // con la misma información que devuelve el servidor
  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.url);
  }

}
