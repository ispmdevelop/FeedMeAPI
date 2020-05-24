import { Request, Response, NextFunction } from 'express';
import { Controller, Middleware, Get, Put, Post, Delete } from '@overnightjs/core';
import { Addressservice } from './address.service';
import { ValidateBody } from './address.middleware';
import { AddressDto } from '../../shared/dto/address.dto';
import { HttpResponseModel } from '../../shared/models/httpResponseModel';
import { AddressQuery } from './address.response';
import { adminRequired, sameUserIdOrAdminUser, loggedRequired } from '../../helpers/authMiddlewares';

@Controller('api/address')
export class AddressController {
  private addressservice: Addressservice;
  private addressQuery: AddressQuery;
  constructor() {
    this.addressservice = new Addressservice();
    this.addressQuery = new AddressQuery();
  }

  @Get('')
  @Middleware([adminRequired])
  async getAllAddresses(req: Request, res: Response, next: NextFunction) {
    try {
      const addresses: Array<AddressDto> = await this.addressservice.getAllAddresses();
      const httpResponse: HttpResponseModel = this.addressQuery.getAllAddresses(addresses);
      return res.status(httpResponse.code).send(httpResponse);
    } catch (e) {
      next({ name: e.name, message: e.message });
    }
  }

  @Get('user/:userid')
  @Middleware([sameUserIdOrAdminUser])
  async getAddressesByUserId(req: Request, res: Response, next: NextFunction) {
    try {
      const addresses: Array<AddressDto> = await this.addressservice.getAddressesByUserId(parseInt(req.params.userid));
      const httpResponse: HttpResponseModel = this.addressQuery.getAddressesByUserId(addresses);
      return res.status(httpResponse.code).send(httpResponse);
    } catch (e) {
      next({ name: e.name, message: e.message });
    }
  }

  @Get(':id')
  @Middleware([loggedRequired])
  async getAddress(req: Request, res: Response, next: NextFunction) {
    try {
      const address: AddressDto = await this.addressservice.getAddressById(parseInt(req.params.id));
      const httpResponse: HttpResponseModel = this.addressQuery.getAddress(address);
      return res.status(httpResponse.code).send(httpResponse);
    } catch (e) {
      next({ name: e.name, message: e.message });
    }
  }

  @Post('')
  @Middleware([loggedRequired, ValidateBody])
  async postAddress(req: Request, res: Response, next: NextFunction) {
    try {
      const address: AddressDto = await this.addressservice.postAddress(req.body);
      const httpResponse: HttpResponseModel = this.addressQuery.postAddress(address);
      return res.status(httpResponse.code).send(httpResponse);
    } catch (e) {
      next({ name: e.name, message: e.message });
    }
  }

  @Put(':id')
  @Middleware([loggedRequired, ValidateBody])
  async putAddress(req: Request, res: Response, next: NextFunction) {
    try {
      const updated: number = await this.addressservice.putAddress(parseInt(req.params.id), req.body);
      const httpResponse: HttpResponseModel = this.addressQuery.putAddress(updated);
      return res.status(httpResponse.code).send(httpResponse);
    } catch (e) {
      next({ name: e.name, message: e.message });
    }
  }

  @Delete(':id')
  @Middleware([loggedRequired])
  async deleteAddress(req: Request, res: Response, next: NextFunction) {
    try {
      const deleted: number = await this.addressservice.deleteAddress(parseInt(req.params.id));
      const httpResponse: HttpResponseModel = this.addressQuery.deleteAddress(deleted);
      return res.status(httpResponse.code).send(httpResponse);
    } catch (e) {
      next({ name: e.name, message: e.message });
    }
  }
}
