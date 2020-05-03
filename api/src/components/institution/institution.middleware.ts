import Joi, { Schema } from '@hapi/joi';
import { Request, Response, NextFunction } from 'express';
import { InstitutionDto } from '../../shared/dto/institution.dto';

export async function ValidateBody(req: Request, res: Response, next: NextFunction) {
    try {
        const schema: Schema = defineJoiSchema();
        const result: InstitutionDto = await schema.validateAsync(req.body);
        req.body = result;
        next();
    } catch (e) {
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
        address: Joi.string()
            .trim()
            .required()
            .messages({
                'string.base': 'emailFieldMustBeString',
                'string.empty': 'emailFieldIsEmpty',
                'any.required': 'emailFieldIsRequired'
            }),
        password: Joi.string()
            .trim()
            .messages({
                'string.base': 'roleFieldMustBeString',
                'string.empty': 'roleFieldIsEmpty'
            }),
        schedule: Joi.array()
            .items(
                Joi.string()
                    .trim()
                    .messages({
                        'string.base': 'roleFieldMustBeString',
                        'string.empty': 'roleFieldIsEmpty'
                    }))
    })

    return schema;
}

