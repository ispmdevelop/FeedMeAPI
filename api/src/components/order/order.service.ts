import { OrderDto } from "../../shared/dto/order.dto";
import { OrderRepository } from "./order.repository";
import { OrderEntity } from '../../persistance/entity/Order';
import { getRepository } from 'typeorm';

export class OrderService {
    orderRepository: OrderRepository;

    constructor() {
        this.orderRepository = new OrderRepository(getRepository(OrderEntity));
    }

    public async getAllOrders(): Promise<Array<OrderDto>> {
        return await this.orderRepository.findAll(true, ["user", "product", "institution"]);
    }

    public async getOrderByDate(date: String): Promise<Array<OrderDto>> {
        return await this.orderRepository.getOrdersByDate(date);
    }

    public async getOrdersByDateAndUserId(date: String, userId: number): Promise<Array<OrderDto>> {
        return await this.orderRepository.getOrdersByDateAndUserId(date, userId);
    }

    public async getOrderById(id: number): Promise<OrderDto> {
        return await this.orderRepository.findById(id, true, ["user", "product", "institution"]);
    }

    public async postOrder(order: OrderDto): Promise<OrderDto> {
        return await this.orderRepository.save(order);
    }

    public async putOrder(id: number, order: OrderDto): Promise<number> {
        return await this.orderRepository.update(id, order);
    }

    public deleteOrder(id: number, ): Promise<number> {
        return this.orderRepository.delete(id);
    }
}