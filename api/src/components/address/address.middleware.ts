import Joi, { Schema } from '@hapi/joi';
import { Request, Response, NextFunction } from 'express';
import { AddressDto } from '../../shared/dto/address.dto';

export async function ValidateBody(req: Request, res: Response, next: NextFunction) {
  try {
    const schema: Schema = defineJoiSchema();
    const result: AddressDto = await schema.validateAsync(req.body);
    req.body = JSON.parse(JSON.stringify(result));
    next();
  } catch (e) {
    next({ name: e.name, message: e.message });
  }
}

function defineJoiSchema(): Schema {
  const schema: Schema = Joi.object().keys({
    alias: Joi.string().trim().required().messages({
      'string.base': 'aliasFieldMustBeString',
      'string.empty': 'aliasFieldIsEmpty',
      'any.required': 'aliasFieldIsRequired',
    }),
    street: Joi.string().trim().required().messages({
      'string.base': 'streetFieldMustBeString',
      'string.empty': 'streetFieldIsEmpty',
      'any.required': 'streetFieldIsRequired',
    }),
    buildingNumber: Joi.string().trim().required().messages({
      'string.base': 'buildingNumberFieldMustBeString',
      'string.empty': 'buildingNumberFieldIsEmpty',
      'any.required': 'buildingNumberFieldIsRequired',
    }),
    reference: Joi.string().trim().messages({
      'string.base': 'referenceFieldMustBeString',
      'string.empty': 'referenceFieldIsEmpty',
      'any.required': 'referenceFieldIsRequired',
    }),
    lat: Joi.number().required().messages({
      'number.base': 'latFieldMustBeNumber',
      'any.required': 'latFieldIsRequired',
    }),
    lon: Joi.number().required().messages({
      'number.base': 'lonFieldMustBeNumber',
      'any.required': 'lonFieldIsRequired',
    }),
    userId: Joi.number().min(1).required().messages({
      'number.base': 'userIdFieldMustBeNumber',
      'number.min': 'userIdShouldBeGreaterThan0',
      'any.required': 'userIdFieldIsRequired',
    }),
  });

  return schema;
}
