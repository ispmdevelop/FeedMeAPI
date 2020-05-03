import { ProductDto } from "./product.dto";
import { UserDto } from "./user.dto";
import { InstitutionDto } from "./institution.dto";
import { Timestamp } from "typeorm";

export interface OrderDto {
    id?: number;
    quantity: number;
    schedule: String;
    userId: number;
    productId: number;
    institutionId: number;
    date: Date;
    user?: UserDto;
    product?: ProductDto;
    institution?: InstitutionDto;
    ready?: boolean;
    delivered?: boolean;
}
