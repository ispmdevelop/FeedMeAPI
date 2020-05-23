import { InstitutionDto } from "../../shared/dto/institution.dto";
import { InstitutionRepository } from "./institution.repository";
import { InstitutionEntity } from '../../persistance/entity/Intitution';
import { getRepository } from 'typeorm';

export class InstitutionService {
    institutionRepository: InstitutionRepository;

    constructor() {
        this.institutionRepository = new InstitutionRepository(getRepository(InstitutionEntity));
    }

    public async getAllInstitutions(): Promise<Array<InstitutionDto>> {
        return await this.institutionRepository.findAll();
    }

    public async getInstitutionByPassword(password: String): Promise<InstitutionDto> {
        return await this.institutionRepository.findByWhereOne({ "password": password });
    }

    public async getInstitutionById(id: number): Promise<InstitutionDto> {
        return await this.institutionRepository.findById(id);
    }

    public async postInstitution(institution: InstitutionDto): Promise<InstitutionDto> {
        return await this.institutionRepository.save(institution);
    }

    public async putInstitution(id: number, institution: InstitutionDto): Promise<number> {
        return await this.institutionRepository.update(id, institution);
    }

    public deleteInstitution(id: number, ): Promise<number> {
        return this.institutionRepository.delete(id);
    }
}