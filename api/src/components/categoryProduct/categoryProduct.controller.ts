import { Request, Response, NextFunction } from 'express';
import { Controller, Middleware, Get, Put, Post, Delete } from '@overnightjs/core';
import { CategoryProductService } from './categoryProduct.service';
import { ValidateBody } from './categoryProduct.middleware';
import { CategoryProductDto } from '../../shared/dto/categoryProduct.dto';
import { HttpResponseModel } from '../../shared/models/httpResponseModel';
import { CategoryProductQuery } from './categoryProduct.response';
import { adminRequired, loggedRequired } from '../../helpers/authMiddlewares';

@Controller('api/categoryProduct')
export class CategoryProductController {
  private categoryProductService: CategoryProductService;
  private categoryProductQuery: CategoryProductQuery;
  constructor() {
    this.categoryProductService = new CategoryProductService();
    this.categoryProductQuery = new CategoryProductQuery();
  }

  @Get('')
  @Middleware(adminRequired)
  async getAllCategoryProducts(req: Request, res: Response, next: NextFunction) {
    try {
      const categoryProducts: Array<CategoryProductDto> = await this.categoryProductService.getAllCategoryProducts();
      const httpResponse: HttpResponseModel = this.categoryProductQuery.getAllCategoryProducts(categoryProducts);
      return res.status(httpResponse.code).send(httpResponse);
    } catch (e) {
      next({ name: e.name, message: e.message });
    }
  }

  @Get(':id')
  @Middleware(loggedRequired)
  async getCategoryProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const categoryProduct: CategoryProductDto = await this.categoryProductService.getCategoryProductById(
        parseInt(req.params.id)
      );
      const httpResponse: HttpResponseModel = this.categoryProductQuery.getCategoryProduct(categoryProduct);
      return res.status(httpResponse.code).send(httpResponse);
    } catch (e) {
      next({ name: e.name, message: e.message });
    }
  }

  @Post('')
  @Middleware([adminRequired, ValidateBody])
  async postCategoryProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const categoryProduct: CategoryProductDto = await this.categoryProductService.postCategoryProduct(req.body);
      const httpResponse: HttpResponseModel = this.categoryProductQuery.postCategoryProduct(categoryProduct);
      return res.status(httpResponse.code).send(httpResponse);
    } catch (e) {
      next({ name: e.name, message: e.message });
    }
  }

  @Put(':id')
  @Middleware([adminRequired, ValidateBody])
  async putCategoryProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const updated: number = await this.categoryProductService.putCategoryProduct(parseInt(req.params.id), req.body);
      const httpResponse: HttpResponseModel = this.categoryProductQuery.putCategoryProduct(updated);
      return res.status(httpResponse.code).send(httpResponse);
    } catch (e) {
      next({ name: e.name, message: e.message });
    }
  }

  @Delete(':id')
  @Middleware(adminRequired)
  async deleteCategoryProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const deleted: number = await this.categoryProductService.deleteCategoryProduct(parseInt(req.params.id));
      const httpResponse: HttpResponseModel = this.categoryProductQuery.deleteCategoryProduct(deleted);
      return res.status(httpResponse.code).send(httpResponse);
    } catch (e) {
      next({ name: e.name, message: e.message });
    }
  }
}
