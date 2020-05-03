import Joi, { Schema } from '@hapi/joi';
import { Request, Response, NextFunction } from 'express';
import { UserDto } from '../../shared/dto/user.dto';

export async function ValidateBody(req: Request, res: Response, next: NextFunction) {
  try {
    const schema: Schema = defineJoiSchema();
    const result: UserDto = await schema.validateAsync(req.body);
    req.body = result;
    next();
  } catch (e) {
    next({ name: e.name, message: e.message });
  }
}

export async function ValidateBodyPost(req: Request, res: Response, next: NextFunction) {
  try {
    const schema: Schema = defineJoiSchemaPost();
    const result: UserDto = await schema.validateAsync(req.body);
    req.body = result;
    next();
  } catch (e) {
    next({ name: e.name, message: e.message });
  }
}

export async function ValidateBodyLogin(req: Request, res: Response, next: NextFunction) {
  try {
    const schema: Schema = defineJoiSchemaLogin();
    const result: UserDto = await schema.validateAsync(req.body);
    req.body = result;
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
    email: Joi.string().trim().required().messages({
      'string.base': 'emailFieldMustBeString',
      'string.empty': 'emailFieldIsEmpty',
      'any.required': 'emailFieldIsRequired',
    }),
    phone: Joi.string().length(8).trim().messages({
      'string.base': 'roleFieldMustBeString',
      'string.empty': 'roleFieldIsEmpty',
    }),
  });
  return schema;
}

function defineJoiSchemaPost(): Schema {
  const schema: Schema = Joi.object().keys({
    name: Joi.string().trim().required().messages({
      'string.base': 'nameFieldMustBeString',
      'string.empty': 'nameFieldIsEmpty',
      'any.required': 'nameFieldIsRequired',
    }),
    password: Joi.string().trim().required().messages({
      'string.base': 'passwordFieldMustBeString',
      'string.empty': 'passwordFieldIsEmpty',
      'any.required': 'passwordFieldIsRequired',
    }),
    email: Joi.string().trim().required().messages({
      'string.base': 'emailFieldMustBeString',
      'string.empty': 'emailFieldIsEmpty',
      'any.required': 'emailFieldIsRequired',
    }),
    phone: Joi.string().length(8).trim().messages({
      'string.base': 'roleFieldMustBeString',
      'string.empty': 'roleFieldIsEmpty',
    }),
  });

  return schema;
}

function defineJoiSchemaLogin(): Schema {
  const schema: Schema = Joi.object().keys({
    password: Joi.string().trim().required().messages({
      'string.base': 'emailFieldMustBeString',
      'string.empty': 'emailFieldIsEmpty',
      'any.required': 'emailFieldIsRequired',
    }),
    email: Joi.string().trim().required().messages({
      'string.base': 'emailFieldMustBeString',
      'string.empty': 'emailFieldIsEmpty',
      'any.required': 'emailFieldIsRequired',
    }),
    name: Joi.string().trim().messages({
      'string.base': 'nameFieldMustBeString',
      'string.empty': 'nameFieldIsEmpty',
      'any.required': 'nameFieldIsRequired',
    }),
    phone: Joi.string().trim().messages({
      'string.base': 'roleFieldMustBeString',
      'string.empty': 'roleFieldIsEmpty',
    }),
    role: Joi.string().trim().messages({
      'string.base': 'roleFieldMustBeString',
      'string.empty': 'roleFieldIsEmpty',
    }),
  });

  return schema;
}
