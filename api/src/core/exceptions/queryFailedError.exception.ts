import { ErrorModel } from '../../shared/models/errorModel';
import { HttpResponseModel } from "../../shared/models/httpResponseModel";

export default function (error: ErrorModel): HttpResponseModel {
  if (error.message.includes("llave duplicada viola restricción"))
    return {
      code: 400,
      message: "Duplicated Key"
    };
  if (error.message.includes("la sintaxis de entrada no es válida para el enum"))
    return {
      code: 400,
      message: "Enum not valid value"
    };
  if (error.message.includes("viola la llave foránea")) {
    return {
      code: 400,
      message: "Primero elimine los elementos dependientes"
    };
  }

  return {
    code: 404,
    message: "Query Failed Error notFound postgresql"
  };
}
