import { Request, Response, NextFunction } from "express";
import {
  Controller,
  Middleware,
  Get,
  Put,
  Post,
  Delete,
} from "@overnightjs/core";
import { ContactNumberService } from "./contactNumber.service";
import { ValidateBody } from "./contactNumber.middleware";
import { ContactNumberDto } from "../../shared/dto/contactNumber.dto";
import { HttpResponseModel } from "../../shared/models/httpResponseModel";
import { ContactNumberQuery } from "./contactNumber.response";
import { adminRequired } from "../../helpers/authMiddlewares";


@Controller("api/contactNumber")
export class ContactNumberController {
  private contactNumberService: ContactNumberService;
  private contactNumberQuery: ContactNumberQuery;
  constructor() {
    this.contactNumberService = new ContactNumberService();
    this.contactNumberQuery = new ContactNumberQuery();
  }

  @Get("")
  @Middleware([adminRequired])
  async getAllContactNumbers(req: Request, res: Response, next: NextFunction) {
    try {
      const contactNumbers: Array<ContactNumberDto> = await this.contactNumberService.getAllContactNumbers();
      const httpResponse: HttpResponseModel = this.contactNumberQuery.getAllContactNumbers(
        contactNumbers
      );
      return res.status(httpResponse.code).send(httpResponse);
    } catch (e) {
      next({ name: e.name, message: e.message });
    }
  }

  @Get(":id")
  async getContactNumber(req: Request, res: Response, next: NextFunction) {
    try {
      const contactNumber: ContactNumberDto = await this.contactNumberService.getContactNumberById(
        parseInt(req.params.id)
      );
      const httpResponse: HttpResponseModel = this.contactNumberQuery.getContactNumber(
        contactNumber
      );
      return res.status(httpResponse.code).send(httpResponse);
    } catch (e) {
      next({ name: e.name, message: e.message });
    }
  }

  @Post("")
  @Middleware([adminRequired, ValidateBody])
  async postContactNumber(req: Request, res: Response, next: NextFunction) {
    try {
      const contactNumber: ContactNumberDto = await this.contactNumberService.postContactNumber(
        req.body
      );
      const httpResponse: HttpResponseModel = this.contactNumberQuery.postContactNumber(
        contactNumber
      );
      return res.status(httpResponse.code).send(httpResponse);
    } catch (e) {
      next({ name: e.name, message: e.message });
    }
  }

  @Put(":id")
  @Middleware([adminRequired, ValidateBody])
  async putContactNumber(req: Request, res: Response, next: NextFunction) {
    try {
      const updated: number = await this.contactNumberService.putContactNumber(
        parseInt(req.params.id),
        req.body
      );
      const httpResponse: HttpResponseModel = this.contactNumberQuery.putContactNumber(
        updated
      );
      return res.status(httpResponse.code).send(httpResponse);
    } catch (e) {
      next({ name: e.name, message: e.message });
    }
  }

  @Delete(":id")
  @Middleware([adminRequired])
  async deleteContactNumber(req: Request, res: Response, next: NextFunction) {
    try {
      const deleted: number = await this.contactNumberService.deleteContactNumber(
        parseInt(req.params.id)
      );
      const httpResponse: HttpResponseModel = this.contactNumberQuery.deleteContactNumber(
        deleted
      );
      return res.status(httpResponse.code).send(httpResponse);
    } catch (e) {
      next({ name: e.name, message: e.message });
    }
  }
}
