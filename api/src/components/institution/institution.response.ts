import { InstitutionDto } from '../../shared/dto/institution.dto';
import { HttpResponseModel } from '../../shared/models/httpResponseModel';

export class InstitutionQuery {
  getAllInstitutions(institutions: Array<InstitutionDto>): HttpResponseModel {
    if (institutions.length == 0) {
      return { code: 404, message: 'Not Found' };
    }
    return { code: 200, data: institutions };
  }

  getInstitutionByPassword(institution: InstitutionDto): HttpResponseModel {
    if (institution == null) {
      return { code: 404, message: 'Not Found' };
    }
    return { code: 200, data: institution };
  }

  getInstitution(institution: InstitutionDto): HttpResponseModel {
    if (institution == null) {
      return { code: 404, message: 'Not Found' };
    }
    return { code: 200, data: institution };
  }

  postInstitution(institution: InstitutionDto) {
    if (institution == null) {
      return { code: 404, message: 'Not Created' };
    }
    return { code: 201, data: institution };
  }

  putInstitution(updated: number) {
    if (updated == 0) {
      return { code: 404, message: 'updatedFailed' };
    }
    return { code: 200, data: updated };
  }

  deleteInstitution(deleted: number) {
    if (deleted == 0) {
      return { code: 404, message: 'deletedFailed' };
    }
    return { code: 200, data: deleted };
  }
}
