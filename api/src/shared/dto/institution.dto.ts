import { SubscriptionDto } from './subscription.dto';
import { OrderDto } from './order.dto';

export interface InstitutionDto {
    id?: number;
    name: String;
    address: String;
    password: String;
    schedule: Array<String>
    subscriptions?: Array<SubscriptionDto>;
    orders?: Array<OrderDto>
}