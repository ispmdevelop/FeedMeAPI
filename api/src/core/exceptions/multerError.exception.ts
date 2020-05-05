import { ErrorModel } from '../../shared/models/errorModel';
import { HttpResponseModel } from "../../shared/models/httpResponseModel";

export default function(error: ErrorModel): HttpResponseModel {
  if (error.message.includes("allowed"))
    return {
      code: 400,
      message: "Extension not allowed - Allowed (jpg, jpeg, png)"
    };

  return {
    code: 404,
    message: "Multer Error notFound"
  };
}
