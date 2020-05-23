import { UserDto } from '../../shared/dto/user.dto';
import { HttpResponseModel } from '../../shared/models/httpResponseModel';

export class UserQuery {
  getAllUsers(users: Array<UserDto>): HttpResponseModel {
    if (users.length == 0) {
      return { code: 404, message: 'Not Found' };
    }
    return { code: 200, data: users };
  }

  getUserByEmail(user: UserDto): HttpResponseModel {
    if (user == null) {
      return { code: 404, message: 'Not Found' };
    }
    return { code: 200, data: user };
  }

  getUser(user: UserDto): HttpResponseModel {
    if (user == null) {
      return { code: 404, message: 'Not Found' };
    }
    return { code: 200, data: user };
  }

  postUser(user: UserDto) {
    if (user == null) {
      return { code: 404, message: 'Not Created' };
    }
    return { code: 201, data: user };
  }

  loginUser(user: UserDto) {
    if (user == null) {
      return { code: 401, message: 'Login Failed' };
    }
    return { code: 200, data: user };
  }

  putUser(updated: number) {
    if (updated == 0) {
      return { code: 404, message: 'updatedFailed' };
    }
    return { code: 200, data: updated };
  }

  deleteUser(deleted: number) {
    if (deleted == 0) {
      return { code: 404, message: 'deletedFailed' };
    }
    return { code: 200, data: deleted };
  }
}
