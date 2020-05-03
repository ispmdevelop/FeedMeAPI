import { GenericRepositoryHelper } from '../../helpers/genericRepository';
import { OrderEntity } from '../../persistance/entity/Order';
import { getManager } from 'typeorm';
import { OrderDto } from '../../shared/dto/order.dto';

export class OrderRepository extends GenericRepositoryHelper<OrderEntity> {
  public async getOrdersByDate(date: String): Promise<Array<OrderDto>> {
    return await getManager()
      .createQueryBuilder(OrderEntity, 'order')
      .where('order.date = :date', { date: date })
      .innerJoinAndSelect('order.user', 'user')
      .innerJoinAndSelect('order.product', 'product')
      .innerJoinAndSelect('order.institution', 'institution')
      .getMany();
  }

  public async getOrdersByDateAndUserId(date: String, userId: number): Promise<Array<OrderDto>> {
    return await getManager()
      .createQueryBuilder(OrderEntity, 'order')
      .where('order.date = :date AND order.userId = :userId', { date: date, userId: userId })
      .innerJoinAndSelect('order.user', 'user')
      .innerJoinAndSelect('order.product', 'product')
      .innerJoinAndSelect('order.institution', 'institution')
      .getMany();
  }
}
