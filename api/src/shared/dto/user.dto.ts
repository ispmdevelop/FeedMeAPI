import { SubscriptionDto } from "./subscription.dto";
import { OrderDto } from "./order.dto";

export interface UserDto {
    id?: number;
    name: String;
    email: String;
    phone: String;
    role: String;
    password: string;
    subscriptions?: Array<SubscriptionDto>;
    orders?: Array<OrderDto>;
}
