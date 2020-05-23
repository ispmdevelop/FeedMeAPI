import { ContactNumberDto } from '../../shared/dto/contactNumber.dto';
import { HttpResponseModel } from '../../shared/models/httpResponseModel';
import * as global from "../../config/global.config";

export class ContactNumberQuery {
  getAllContactNumbers(contactNumbers: Array<ContactNumberDto>): HttpResponseModel {
    if (contactNumbers.length == 0) {
      return { code: 404, message: 'Not Found' };
    }
    return { code: 200, data: contactNumbers };
  }

  getContactNumberActive(contactNumber: ContactNumberDto): HttpResponseModel {
    if (contactNumber == null) {
      return {
        code: 200, data: global.default
          .CONTACT_NUMBER_DEFAULT
      };
    }
    return { code: 200, data: contactNumber };
  }

  getContactNumber(contactNumber: ContactNumberDto): HttpResponseModel {
    if (contactNumber == null) {
      return { code: 404, message: 'Not Found' };
    }
    return { code: 200, data: contactNumber };
  }

  postContactNumber(contactNumber: ContactNumberDto) {
    if (contactNumber == null) {
      return { code: 404, message: 'Not Created' };
    }
    return { code: 201, data: contactNumber };
  }

  putContactNumber(updated: number) {
    if (updated == 0) {
      return { code: 404, message: 'updatedFailed' };
    }
    return { code: 200, data: updated };
  }

  deleteContactNumber(deleted: number) {
    if (deleted == 0) {
      return { code: 404, message: 'deletedFailed' };
    }
    return { code: 200, data: deleted };
  }
}
