import Joi, { Schema } from '@hapi/joi';
import * as path from "path";
import { Request, Response, NextFunction } from 'express';
import { ProductDto } from '../../shared/dto/product.dto';
import { getStorage } from "../../helpers/multer";
import { deleteImage } from "../../helpers/deleteImage";

var multer = getStorage("products");
var uploadImage = multer.single("image");

export function uploadProductImage(req: Request, res: Response, next: NextFunction) {
    uploadImage(req, res, function (err) {
        if (err) {
            return next({ name: err.name, message: err.message })
        }
        next();
    });
}

export async function ValidateBody(req: Request, res: Response, next: NextFunction) {
    try {
        const schema: Schema = defineJoiSchema();
        const result: ProductDto = await schema.validateAsync(req.body);
        req.body = JSON.parse(JSON.stringify(result));
        next();
    } catch (e) {
        deleteImage(path.resolve(__dirname, `../../public/products/${req.body.imageName}`));
        next({ name: e.name, message: e.message })
    }
}

function defineJoiSchema(): Schema {
    const schema: Schema = Joi.object().keys({
        name: Joi.string()
            .trim()
            .required()
            .messages({
                'string.base': 'nameFieldMustBeString',
                'string.empty': 'nameFieldIsEmpty',
                'any.required': 'nameFieldIsRequired'
            }),
        price: Joi.number()
            .required()
            .messages({
                "number.base": "priceFieldMustBeNumber",
                "any.required": "priceFieldIsRequired"
            }),
        active: Joi.bool()
            .required()
            .messages({
                "bool.base": "activeFieldMustBeBoolean",
                "any.required": "activeFieldIsRequired"
            }),
        description: Joi.string()
            .trim()
            .required()
            .messages({
                'string.base': 'roleFieldMustBeString',
                'string.empty': 'roleFieldIsEmpty',
                'any.required': 'descriptionFieldIsRequired'
            }),
        imageName: Joi.string()
            .required()
    })

    return schema;
}

