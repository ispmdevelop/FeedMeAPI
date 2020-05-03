import { ErrorModel } from '../../shared/models/errorModel';
import { HttpResponseModel } from "../../shared/models/httpResponseModel";

export default function(error: ErrorModel): HttpResponseModel {
  if (error.message.includes("Dont have permission"))
    return {
      code: 401,
      message: "You dont have permission to access this data"
    };

  return {
    code: 404,
    message: "Auth permission error"
  };
}