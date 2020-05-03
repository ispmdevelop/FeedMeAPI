import Joi, { Schema } from '@hapi/joi';
import { Request, Response, NextFunction } from 'express';
import { SubscriptionDto } from '../../shared/dto/subscription.dto';

export async function ValidateBody(req: Request, res: Response, next: NextFunction) {
    try {
        const schema: Schema = defineJoiSchema();
        const result: SubscriptionDto = await schema.validateAsync(req.body);
        req.body = result;
        next();
    } catch (e) {
        next({ name: e.name, message: e.message })
    }
}

function defineJoiSchema(): Schema {
    const schema: Schema = Joi.object().keys({
        userId: Joi.number()
            .min(1)
            .required()
            .messages({
                "number.base": "userIdFieldMustBeNumber",
                "number.min": "userIdMustBeGreaterThan0",
                "any.required": "userIdFieldIsRequired"
            }),
        institutionId: Joi.number()
            .min(1)
            .required()
            .messages({
                "number.base": "institutionIdFieldMustBeNumber",
                "number.min": "institutionIdMustBeGreaterThan0",
                "any.required": "institutionIdFieldIsRequired"
            }),
    })

    return schema;
}

