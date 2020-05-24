import { AddressDto } from '../../shared/dto/address.dto';
import { HttpResponseModel } from '../../shared/models/httpResponseModel';

export class AddressQuery {
  getAllAddresses(addresses: Array<AddressDto>): HttpResponseModel {
    if (addresses.length == 0) {
      return { code: 404, message: 'Not Found' };
    }
    return { code: 200, data: addresses };
  }

  getAddressesByUserId(addresses: Array<AddressDto>): HttpResponseModel {
    if (addresses.length == 0) {
      return { code: 404, message: 'Not Found' };
    }
    return { code: 200, data: addresses };
  }

  getAddress(address: AddressDto): HttpResponseModel {
    if (address == null) {
      return { code: 404, message: 'Not Found' };
    }
    return { code: 200, data: address };
  }

  postAddress(address: AddressDto) {
    if (address == null) {
      return { code: 404, message: 'Not Created' };
    }
    return { code: 201, data: address };
  }

  putAddress(updated: number) {
    if (updated == 0) {
      return { code: 404, message: 'updatedFailed' };
    }
    return { code: 200, data: updated };
  }

  deleteAddress(deleted: number) {
    if (deleted == 0) {
      return { code: 404, message: 'deletedFailed' };
    }
    return { code: 200, data: deleted };
  }
}
