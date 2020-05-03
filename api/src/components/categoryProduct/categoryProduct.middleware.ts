import Joi, { Schema } from '@hapi/joi';
import { Request, Response, NextFunction } from 'express';
import { CategoryProductDto } from '../../shared/dto/categoryProduct.dto';

export async function ValidateBody(req: Request, res: Response, next: NextFunction) {
  try {
    const schema: Schema = defineJoiSchema();
    const result: CategoryProductDto = await schema.validateAsync(req.body);
    req.body = result;
    next();
  } catch (e) {
    next({ name: e.name, message: e.message });
  }
}

function defineJoiSchema(): Schema {
  const schema: Schema = Joi.object().keys({
    productId: Joi.number().min(1).required().messages({
      'number.base': 'productIdFieldMustBeNumber',
      'number.min': 'productIdShouldBeGreaterThan0',
      'any.required': 'productIdFieldIsRequired',
    }),
    categoryId: Joi.number().min(1).required().messages({
      'number.base': 'categoryIdFieldMustBeNumber',
      'number.min': 'categoryIdShouldBeGreaterThan0',
      'any.required': 'categoryIdFieldIsRequired',
    }),
  });

  return schema;
}
