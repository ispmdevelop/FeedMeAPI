import { Request, Response, NextFunction } from "express";
import {
    Controller,
    Middleware,
    Get,
    Put,
    Post,
    Delete,
} from "@overnightjs/core";
import { ProductService } from "./product.service";
import { ValidateBody, uploadProductImage } from "./product.middleware";
import { ProductDto } from "../../shared/dto/product.dto";
import { HttpResponseModel } from "../../shared/models/httpResponseModel";
import { ProductQuery } from "./product.response";
import { deleteImage } from "../../helpers/deleteImage";
import { adminRequired } from "../../helpers/authMiddlewares";
import * as path from "path";

@Controller("api/product")
export class ProductController {
    private productService: ProductService;
    private productQuery: ProductQuery;
    constructor() {
        this.productService = new ProductService();
        this.productQuery = new ProductQuery();
    }

    @Get("")
    async getAllProducts(req: Request, res: Response, next: NextFunction) {
        try {
            const products: Array<ProductDto> = await this.productService.getAllProducts();
            const httpResponse: HttpResponseModel = this.productQuery.getAllProducts(
                products
            );
            return res.status(httpResponse.code).send(httpResponse);
        } catch (e) {
            next({ name: e.name, message: e.message });
        }
    }

    @Get(":id")
    async getProduct(req: Request, res: Response, next: NextFunction) {
        try {
            const product: ProductDto = await this.productService.getProductById(
                parseInt(req.params.id)
            );
            const httpResponse: HttpResponseModel = this.productQuery.getProduct(
                product
            );
            return res.status(httpResponse.code).send(httpResponse);
        } catch (e) {
            next({ name: e.name, message: e.message });
        }
    }

    @Post("")
    @Middleware([adminRequired, uploadProductImage, ValidateBody])
    async postProduct(req: Request, res: Response, next: NextFunction) {
        try {
            const product: ProductDto = await this.productService.postProduct(
                req.body
            );
            const httpResponse: HttpResponseModel = this.productQuery.postProduct(
                product
            );
            return res.status(httpResponse.code).send(httpResponse);
        } catch (e) {
            deleteImage(
                path.resolve(
                    __dirname,
                    `../../public/products/${req.body.imageName}`
                )
            );
            next({ name: e.name, message: e.message });
        }
    }

    @Put(":id")
    @Middleware([adminRequired, uploadProductImage, ValidateBody])
    async putProduct(req: Request, res: Response, next: NextFunction) {
        try {
            const product: ProductDto = await this.productService.getProductById(
                parseInt(req.params.id)
            );
            const updated: number = await this.productService.putProduct(
                parseInt(req.params.id),
                req.body
            );
            deleteImage(
                path.resolve(
                    __dirname,
                    `../../public/products/${product.imageName}`
                )
            );
            const httpResponse: HttpResponseModel = this.productQuery.putProduct(
                updated
            );
            return res.status(httpResponse.code).send(httpResponse);
        } catch (e) {
            deleteImage(
                path.resolve(
                    __dirname,
                    `../../public/products/${req.body.imageName}`
                )
            );
            next({ name: e.name, message: e.message });
        }
    }

    @Delete(":id")
    @Middleware([adminRequired])
    async deleteProduct(req: Request, res: Response, next: NextFunction) {
        try {
            const product: ProductDto = await this.productService.getProductById(
                parseInt(req.params.id)
            );
            const deleted: number = await this.productService.deleteProduct(
                parseInt(req.params.id)
            );
            deleteImage(
                path.resolve(
                    __dirname,
                    `../../public/products/${product.imageName}`
                )
            );
            const httpResponse: HttpResponseModel = this.productQuery.deleteProduct(
                deleted
            );
            return res.status(httpResponse.code).send(httpResponse);
        } catch (e) {
            next({ name: e.name, message: e.message });
        }
    }
}
