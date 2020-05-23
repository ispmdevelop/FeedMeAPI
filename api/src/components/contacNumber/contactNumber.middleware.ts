import Joi, { Schema } from '@hapi/joi';
import * as path from "path";
import { Request, Response, NextFunction } from 'express';
import { ProductDto } from '../../shared/dto/product.dto';


export async function ValidateBody(req: Request, res: Response, next: NextFunction) {
  try {
    const schema: Schema = defineJoiSchema();
    const result: ProductDto = await schema.validateAsync(req.body);
    req.body = JSON.parse(JSON.stringify(result));
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
    number: Joi.string()
      .trim()
      .required()
      .min(8)
      .messages({
        'string.base': 'numberFieldMustBeString',
        'string.empty': 'numberFieldIsEmpty',
        'any.required': 'numberFieldIsRequired'
      }),
    active: Joi.bool()
      .required()
      .messages({
        "bool.base": "activeFieldMustBeBoolean",
        "any.required": "activeFieldIsRequired"
      }),
  })

  return schema;
}

