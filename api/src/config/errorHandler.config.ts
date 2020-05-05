import { Request, Response, NextFunction } from 'express';
import { ErrorModel } from '../shared/models/errorModel';
import CastErrorException from '../core/exceptions/castError.exception';
import ValidationErrorException from '../core/exceptions/validationError.exception';
import MongoErrorException from '../core/exceptions/mongoError.exception';
import MulterErrorException from '../core/exceptions/multerError.exception';
import QueryFailedError from '../core/exceptions/queryFailedError.exception';
import AuthErrorException from "../core/exceptions/authentication.exception";
import { HttpResponseModel } from '../shared/models/httpResponseModel';

export default function (error: ErrorModel, req: Request, res: Response, next: NextFunction) {
  let httpResponse: HttpResponseModel;
  console.log('Error handling', error);

  if (error.name === 'CastError') {
    httpResponse = CastErrorException(error);
    return res.status(httpResponse.code).send(httpResponse);
  }
  if (error.name === 'ValidationError') {
    httpResponse = ValidationErrorException(error);
    return res.status(httpResponse.code).send(httpResponse);
  }
  if (error.name === 'MongoError') {
    httpResponse = MongoErrorException(error);
    return res.status(httpResponse.code).send(httpResponse);
  }
  if (error.name === 'MulterError') {
    httpResponse = MulterErrorException(error);
    return res.status(httpResponse.code).send(httpResponse);
  }
  if (error.name === "QueryFailedError") {
    httpResponse = QueryFailedError(error);
    return res.status(httpResponse.code).send(httpResponse);
  }
  if (error.name = "Auth Error") {
    httpResponse = AuthErrorException(error);
    return res.status(httpResponse.code).send(httpResponse);
  }
  return { code: 404, message: "Error Not Found" };
}