import { UserDto } from "./user.dto";
import { InstitutionDto } from "./institution.dto";

export interface SubscriptionDto {
    id?: number;
    userId: number;
    institutionId: number;
    user?: UserDto;
    institution: InstitutionDto;
}