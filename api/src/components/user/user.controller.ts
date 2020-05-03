import { Request, Response, NextFunction } from 'express';
import { Controller, Middleware, Get, Put, Post, Delete } from '@overnightjs/core';
import { UserService } from './user.service';
import { ValidateBody, ValidateBodyPost, ValidateBodyLogin } from './user.middleware';
import { UserDto } from '../../shared/dto/user.dto';
import { HttpResponseModel } from '../../shared/models/httpResponseModel';
import { UserQuery } from './user.response';
import { loggedRequired, adminRequired, sameUserIdOrAdminUser } from '../../helpers/authMiddlewares';

@Controller('api/user')
export class UserController {
  private userService: UserService;
  private userQuery: UserQuery;
  constructor() {
    this.userService = new UserService();
    this.userQuery = new UserQuery();
  }

  @Get('')
  @Middleware([adminRequired])
  async getAllUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const users: Array<UserDto> = await this.userService.getAllUsers();
      const httpResponse: HttpResponseModel = this.userQuery.getAllUsers(users);
      return res.status(httpResponse.code).send(httpResponse);
    } catch (e) {
      next({ name: e.name, message: e.message });
    }
  }

  @Get('email/:email')
  @Middleware([])
  async getUserByEmail(req: Request, res: Response, next: NextFunction) {
    try {
      const users: UserDto = await this.userService.getUserByEmail(req.params.email);
      const httpResponse: HttpResponseModel = this.userQuery.getUserByEmail(users);
      return res.status(httpResponse.code).send(httpResponse);
    } catch (e) {
      next({ name: e.name, message: e.message });
    }
  }

  @Get(':id')
  @Middleware([sameUserIdOrAdminUser])
  async getUser(req: Request, res: Response, next: NextFunction) {
    try {
      const user: UserDto = await this.userService.getUserById(parseInt(req.params.id));
      const httpResponse: HttpResponseModel = this.userQuery.getUser(user);
      return res.status(httpResponse.code).send(httpResponse);
    } catch (e) {
      next({ name: e.name, message: e.message });
    }
  }

  @Post('')
  @Middleware(ValidateBodyPost)
  async postUser(req, res: Response, next: NextFunction) {
    try {
      const user: UserDto = await this.userService.postUser(req.body);
      const httpResponse: HttpResponseModel = this.userQuery.postUser(user);
      if (user != null) {
        req.session.id = user.id;
        req.session.role = user.role;
      }
      return res.status(httpResponse.code).send(httpResponse);
    } catch (e) {
      next({ name: e.name, message: e.message });
    }
  }

  @Post('login')
  @Middleware(ValidateBodyLogin)
  async loginUser(req, res: Response, next: NextFunction) {
    try {
      const user: UserDto = await this.userService.loginUser(req.body);
      const httpResponse: HttpResponseModel = this.userQuery.loginUser(user);
      if (user != null) {
        req.session.id = user.id;
        req.session.role = user.role;
      }
      return res.status(httpResponse.code).send(httpResponse);
    } catch (e) {
      next({ name: e.name, message: e.message });
    }
  }

  @Put(':id')
  @Middleware([sameUserIdOrAdminUser, ValidateBody])
  async putUser(req, res: Response, next: NextFunction) {
    try {
      req.body.role = req.session.role;
      const updated: number = await this.userService.putUser(parseInt(req.params.id), req.body);
      const httpResponse: HttpResponseModel = this.userQuery.putUser(updated);
      return res.status(httpResponse.code).send(httpResponse);
    } catch (e) {
      next({ name: e.name, message: e.message });
    }
  }

  @Delete(':id')
  @Middleware([sameUserIdOrAdminUser])
  async deleteUser(req: Request, res: Response, next: NextFunction) {
    try {
      const deleted: number = await this.userService.deleteUser(parseInt(req.params.id));
      const httpResponse: HttpResponseModel = this.userQuery.deleteUser(deleted);
      return res.status(httpResponse.code).send(httpResponse);
    } catch (e) {
      next({ name: e.name, message: e.message });
    }
  }
}
