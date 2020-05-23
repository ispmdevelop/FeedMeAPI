import Joi, { Schema } from '@hapi/joi';
import { Request, Response, NextFunction } from 'express';
import { CategoryDto } from '../../shared/dto/category.dto';

export async function ValidateBody(req: Request, res: Response, next: NextFunction) {
  try {
    const schema: Schema = defineJoiSchema();
    const result: CategoryDto = await schema.validateAsync(req.body);
    req.body = JSON.parse(JSON.stringify(result));
    next();
  } catch (e) {
    next({ name: e.name, message: e.message });
  }
}

function defineJoiSchema(): Schema {
  const schema: Schema = Joi.object().keys({
    name: Joi.string().trim().required().messages({
      'string.base': 'nameFieldMustBeString',
      'string.empty': 'nameFieldIsEmpty',
      'any.required': 'nameFieldIsRequired',
    }),
  });

  return schema;
}
