import { OrderDto } from './order.dto';

export interface ProductDto {
    id?: number;
    name: string;
    price: number;
    active: boolean;
    description: String;
    imageName?: String;
    orders?: Array<OrderDto>
}