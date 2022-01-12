import { ProductInterface } from './product.interface'

export interface StoreInterface {
    id:          number;
    name:        string;
    address:     string;
    description: string;
    products:    ProductInterface[];
    image?:      string;
}
