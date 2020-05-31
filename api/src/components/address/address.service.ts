import { AddressDto } from '../../shared/dto/address.dto';
import { AddressRepository } from './address.repository';
import { AddressEntity } from '../../persistance/entity/Address';
import { getRepository } from 'typeorm';

export class Addressservice {
  addressRepository: AddressRepository;

  constructor() {
    this.addressRepository = new AddressRepository(getRepository(AddressEntity));
  }

  public async getAllAddresses(): Promise<Array<AddressDto>> {
    return await this.addressRepository.findAll(true);
  }

  public async getAddressById(id: number): Promise<AddressDto> {
    return await this.addressRepository.findById(id);
  }

  public async getAddressesByUserId(userId: number): Promise<Array<AddressDto>> {
    return await this.addressRepository.findByWhereMany({ "userId": userId });
  }

  public async postAddress(address: AddressDto): Promise<AddressDto> {
    return await this.addressRepository.save(address);
  }

  public async putAddress(id: number, address: AddressDto): Promise<number> {
    return await this.addressRepository.update(id, address);
  }

  public deleteAddress(id: number): Promise<number> {
    return this.addressRepository.delete(id);
  }
}
