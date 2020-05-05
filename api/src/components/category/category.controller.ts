import { Request, Response, NextFunction } from 'express';
import { Controller, Middleware, Get, Put, Post, Delete } from '@overnightjs/core';
import { Categoryservice } from './category.service';
import { ValidateBody } from './category.middleware';
import { CategoryDto } from '../../shared/dto/category.dto';
import { HttpResponseModel } from '../../shared/models/httpResponseModel';
import { CategoryQuery } from './category.response';
import { adminRequired } from '../../helpers/authMiddlewares';

@Controller('api/category')
export class CategoryController {
  private categoryservice: Categoryservice;
  private categoryQuery: CategoryQuery;
  constructor() {
    this.categoryservice = new Categoryservice();
    this.categoryQuery = new CategoryQuery();
  }

  @Get('')
  async getAllCategories(req: Request, res: Response, next: NextFunction) {
    try {
      const Categories: Array<CategoryDto> = await this.categoryservice.getAllCategories();
      const httpResponse: HttpResponseModel = this.categoryQuery.getAllCategories(Categories);
      return res.status(httpResponse.code).send(httpResponse);
    } catch (e) {
      next({ name: e.name, message: e.message });
    }
  }

  @Get(':id')
  async getCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const category: CategoryDto = await this.categoryservice.getCategoryById(parseInt(req.params.id));
      const httpResponse: HttpResponseModel = this.categoryQuery.getCategory(category);
      return res.status(httpResponse.code).send(httpResponse);
    } catch (e) {
      next({ name: e.name, message: e.message });
    }
  }

  @Post('')
  @Middleware([adminRequired, ValidateBody])
  async postCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const category: CategoryDto = await this.categoryservice.postCategory(req.body);
      const httpResponse: HttpResponseModel = this.categoryQuery.postCategory(category);
      return res.status(httpResponse.code).send(httpResponse);
    } catch (e) {
      next({ name: e.name, message: e.message });
    }
  }

  @Put(':id')
  @Middleware([adminRequired, ValidateBody])
  async putCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const updated: number = await this.categoryservice.putCategory(parseInt(req.params.id), req.body);
      const httpResponse: HttpResponseModel = this.categoryQuery.putCategory(updated);
      return res.status(httpResponse.code).send(httpResponse);
    } catch (e) {
      next({ name: e.name, message: e.message });
    }
  }

  @Delete(':id')
  @Middleware([adminRequired])
  async deleteCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const deleted: number = await this.categoryservice.deleteCategory(parseInt(req.params.id));
      const httpResponse: HttpResponseModel = this.categoryQuery.deleteCategory(deleted);
      return res.status(httpResponse.code).send(httpResponse);
    } catch (e) {
      next({ name: e.name, message: e.message });
    }
  }
}
