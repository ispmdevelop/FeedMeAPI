import Joi, { Schema } from "@hapi/joi";
import { Request, Response, NextFunction } from "express";
import { OrderDto } from "../../shared/dto/order.dto";

export async function ValidateBody(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const schema: Schema = defineJoiSchema();
        const result: OrderDto = await schema.validateAsync(req.body);
        req.body = result;
        next();
    } catch (e) {
        next({ name: e.name, message: e.message });
    }
}

function defineJoiSchema(): Schema {
    const schema: Schema = Joi.object().keys({
        quantity: Joi.number().min(1).required().messages({
            "number.base": "quantityFieldMustBeNumber",
            "number.min": "quantityShouldBeGreaterThan0",
            "any.required": "quantityFieldIsRequired",
        }),
        date: Joi.date().required().messages({
            "date.base": "dateFieldMustBeDate",
            "any.required": "emailFieldIsRequired",
        }),
        schedule: Joi.string().trim().messages({
            "string.base": "roleFieldMustBeString",
            "string.empty": "roleFieldIsEmpty",
        }),
        userId: Joi.number().min(1).required().messages({
            "number.base": "userIdFieldMustBeNumber",
            "number.min": "userIdShouldBeGreaterThan0",
            "any.required": "userIdFieldIsRequired",
        }),
        productId: Joi.number().min(1).required().messages({
            "number.base": "productIdFieldMustBeNumber",
            "number.min": "productIdShouldBeGreaterThan0",
            "any.required": "productIdFieldIsRequired",
        }),
        institutionId: Joi.number().min(1).required().messages({
            "number.base": "institutionIdFieldMustBeNumber",
            "number.min": "institutionIdShouldBeGreaterThan0",
            "any.required": "institutionIdFieldIsRequired",
        }),
        ready: Joi.boolean().default(false).messages({
            "boolean.base": "readyFieldMustBeBoolean",
        }),
        delivered: Joi.boolean().default(false).messages({
            "boolean.base": "deliveredFieldMustBeBoolean",
        }),
    });

    return schema;
}
