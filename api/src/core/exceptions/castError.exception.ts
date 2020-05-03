import { ErrorModel } from '../../shared/models/errorModel';
import { HttpResponseModel } from "../../shared/models/httpResponseModel";

export default function (error: ErrorModel): HttpResponseModel {
  return {
    code: 404,
    message: 'notFound'
  }
}
