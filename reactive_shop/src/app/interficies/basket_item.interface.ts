import { Product } from "./product.interface";

// Es como el Producto pero añadiendo la cantidad, y se usa en la cesta de la compra
export interface BasketItem {
    product: Product;
    amount: number;
}