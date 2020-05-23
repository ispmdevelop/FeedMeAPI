import { Request, Response, NextFunction } from 'express';
import { Controller, Middleware, Get, Put, Post, Delete } from '@overnightjs/core';
import { OrderService } from './order.service';
import { ValidateBody } from './order.middleware';
import { OrderDto } from '../../shared/dto/order.dto';
import { HttpResponseModel } from '../../shared/models/httpResponseModel';
import { OrderQuery } from './order.response';
import { adminRequired, loggedRequired, sameUserIdOrAdminUser } from '../../helpers/authMiddlewares';

@Controller('api/order')
export class OrderController {
  private orderService: OrderService;
  private orderQuery: OrderQuery;
  constructor() {
    this.orderService = new OrderService();
    this.orderQuery = new OrderQuery();
  }

  @Get('')
  @Middleware(adminRequired)
  async getAllOrders(req: Request, res: Response, next: NextFunction) {
    try {
      const orders: Array<OrderDto> = await this.orderService.getAllOrders();
      const httpResponse: HttpResponseModel = this.orderQuery.getAllOrders(orders);
      return res.status(httpResponse.code).send(httpResponse);
    } catch (e) {
      next({ name: e.name, message: e.message });
    }
  }

  @Get(':id')
  @Middleware(loggedRequired)
  async getOrder(req: Request, res: Response, next: NextFunction) {
    try {
      const order: OrderDto = await this.orderService.getOrderById(parseInt(req.params.id));
      const httpResponse: HttpResponseModel = this.orderQuery.getOrder(order);
      return res.status(httpResponse.code).send(httpResponse);
    } catch (e) {
      next({ name: e.name, message: e.message });
    }
  }

  @Get('date/:date')
  @Middleware(adminRequired)
  async getOrdersByDate(req: Request, res: Response, next: NextFunction) {
    try {
      const orders: Array<OrderDto> = await this.orderService.getOrderByDate(req.params.date);
      const httpResponse: HttpResponseModel = this.orderQuery.getOrdersByDate(orders);
      return res.status(httpResponse.code).send(httpResponse);
    } catch (e) {
      next({ name: e.name, message: e.message });
    }
  }

  @Get('date/:date/userid/:userid')
  @Middleware(sameUserIdOrAdminUser)
  async getOrdersByDateAndUserId(req: Request, res: Response, next: NextFunction) {
    try {
      const orders: Array<OrderDto> = await this.orderService.getOrdersByDateAndUserId(
        req.params.date,
        parseInt(req.params.userid)
      );
      const httpResponse: HttpResponseModel = this.orderQuery.getOrdersByDateAndUserId(orders);
      return res.status(httpResponse.code).send(httpResponse);
    } catch (e) {
      next({ name: e.name, message: e.message });
    }
  }

  @Post('')
  @Middleware([loggedRequired, ValidateBody])
  async postOrder(req: Request, res: Response, next: NextFunction) {
    try {
      const order: OrderDto = await this.orderService.postOrder(req.body);
      const httpResponse: HttpResponseModel = this.orderQuery.postOrder(order);
      return res.status(httpResponse.code).send(httpResponse);
    } catch (e) {
      next({ name: e.name, message: e.message });
    }
  }

  @Put(':id')
  @Middleware([loggedRequired, ValidateBody])
  async putOrder(req: Request, res: Response, next: NextFunction) {
    try {
      const updated: number = await this.orderService.putOrder(parseInt(req.params.id), req.body);
      const httpResponse: HttpResponseModel = this.orderQuery.putOrder(updated);
      return res.status(httpResponse.code).send(httpResponse);
    } catch (e) {
      next({ name: e.name, message: e.message });
    }
  }

  @Delete(':id')
  @Middleware(loggedRequired)
  async deleteOrder(req: Request, res: Response, next: NextFunction) {
    try {
      const deleted: number = await this.orderService.deleteOrder(parseInt(req.params.id));
      const httpResponse: HttpResponseModel = this.orderQuery.deleteOrder(deleted);
      return res.status(httpResponse.code).send(httpResponse);
    } catch (e) {
      next({ name: e.name, message: e.message });
    }
  }
}
