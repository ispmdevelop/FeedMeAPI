import { ContactNumberDto } from '../../shared/dto/contactNumber.dto';
import { ContactNumberRepository } from './contactNumber.repository';
import { ContactNumberEntity } from '../../persistance/entity/ContactNumber';
import { getRepository } from 'typeorm';

export class ContactNumberService {
  contactNumberRepository: ContactNumberRepository;

  constructor() {
    this.contactNumberRepository = new ContactNumberRepository(getRepository(ContactNumberEntity));
  }

  public async getAllContactNumbers(): Promise<Array<ContactNumberDto>> {
    return await this.contactNumberRepository.findAll();
  }

  public async getContactNumberActive(): Promise<ContactNumberDto> {
    return await this.contactNumberRepository.findByWhereOne({ "active": true });
  }

  public async getContactNumberById(id: number): Promise<ContactNumberDto> {
    return await this.contactNumberRepository.findById(id);
  }

  public async postContactNumber(contactNumber: ContactNumberDto): Promise<ContactNumberDto> {
    return await this.contactNumberRepository.save(contactNumber);
  }

  public async putContactNumber(id: number, contactNumber: ContactNumberDto): Promise<number> {
    return await this.contactNumberRepository.update(id, contactNumber);
  }

  public deleteContactNumber(id: number): Promise<number> {
    return this.contactNumberRepository.delete(id);
  }
}
