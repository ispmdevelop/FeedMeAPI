import { UserDto } from './user.dto';

export interface AddressDto {
  id: number;
  alias: string;
  street: string;
  buildingNumber: string;
  reference: string;
  lon: number;
  lat: number;
  userId: number;
  user?: UserDto;
}
