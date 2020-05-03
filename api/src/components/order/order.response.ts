import { OrderDto } from '../../shared/dto/order.dto';
import { HttpResponseModel } from '../../shared/models/httpResponseModel';

export class OrderQuery {
  getAllOrders(orders: Array<OrderDto>): HttpResponseModel {
    if (orders.length == 0) {
      return { code: 200, data: [] };
    }
    return { code: 200, data: orders };
  }

  getOrder(order: OrderDto): HttpResponseModel {
    if (order == null) {
      return { code: 404, message: 'Not Found' };
    }
    return { code: 200, data: order };
  }

  getOrdersByDate(orders: Array<OrderDto>): HttpResponseModel {
    if (orders.length == 0) {
      return { code: 200, data: [] };
    }
    return { code: 200, data: orders };
  }

  getOrdersByDateAndUserId(orders: Array<OrderDto>): HttpResponseModel {
    if (orders.length == 0) {
      return { code: 200, data: [] };
    }
    return { code: 200, data: orders };
  }

  postOrder(order: OrderDto) {
    if (order == null) {
      return { code: 404, message: 'Not Created' };
    }
    return { code: 201, data: order };
  }

  putOrder(updated: number) {
    if (updated == 0) {
      return { code: 404, message: 'updatedFailed' };
    }
    return { code: 200, data: updated };
  }

  deleteOrder(deleted: number) {
    if (deleted == 0) {
      return { code: 404, message: 'deletedFailed' };
    }
    return { code: 200, data: deleted };
  }
}
