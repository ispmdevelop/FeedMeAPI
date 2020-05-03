import { Request, Response, NextFunction } from "express";
import {
    Controller,
    Middleware,
    Get,
    Put,
    Post,
    Delete,
} from "@overnightjs/core";
import { InstitutionService } from "./institution.service";
import { ValidateBody } from "./institution.middleware";
import { InstitutionDto } from "../../shared/dto/institution.dto";
import { HttpResponseModel } from "../../shared/models/httpResponseModel";
import { InstitutionQuery } from "./institution.response";
import { loggedRequired, adminRequired } from "../../helpers/authMiddlewares";

@Controller("api/institution")
export class InstitutionController {
    private institutionService: InstitutionService;
    private institutionQuery: InstitutionQuery;
    constructor() {
        this.institutionService = new InstitutionService();
        this.institutionQuery = new InstitutionQuery();
    }

    @Get("")
    @Middleware(adminRequired)
    async getAllInstitutions(req: Request, res: Response, next: NextFunction) {
        try {
            const institutions: Array<InstitutionDto> = await this.institutionService.getAllInstitutions();
            const httpResponse: HttpResponseModel = this.institutionQuery.getAllInstitutions(
                institutions
            );
            return res.status(httpResponse.code).send(httpResponse);
        } catch (e) {
            next({ name: e.name, message: e.message });
        }
    }

    @Get("password/:password")
    @Middleware(loggedRequired)
    async getInstitutionByPassword(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        try {
            const institutions: InstitutionDto = await this.institutionService.getInstitutionByPassword(
                req.params.password
            );
            const httpResponse: HttpResponseModel = this.institutionQuery.getInstitutionByPassword(
                institutions
            );
            return res.status(httpResponse.code).send(httpResponse);
        } catch (e) {
            next({ name: e.name, message: e.message });
        }
    }

    @Get(":id")
    @Middleware(loggedRequired)
    async getInstitution(req: Request, res: Response, next: NextFunction) {
        try {
            const institution: InstitutionDto = await this.institutionService.getInstitutionById(
                parseInt(req.params.id)
            );
            const httpResponse: HttpResponseModel = this.institutionQuery.getInstitution(
                institution
            );
            return res.status(httpResponse.code).send(httpResponse);
        } catch (e) {
            next({ name: e.name, message: e.message });
        }
    }

    @Post("")
    @Middleware([adminRequired, ValidateBody])
    async postInstitution(req: Request, res: Response, next: NextFunction) {
        try {
            const institution: InstitutionDto = await this.institutionService.postInstitution(
                req.body
            );
            const httpResponse: HttpResponseModel = this.institutionQuery.postInstitution(
                institution
            );
            return res.status(httpResponse.code).send(httpResponse);
        } catch (e) {
            next({ name: e.name, message: e.message });
        }
    }

    @Put(":id")
    @Middleware([adminRequired, ValidateBody])
    async putInstitution(req: Request, res: Response, next: NextFunction) {
        try {
            const updated: number = await this.institutionService.putInstitution(
                parseInt(req.params.id),
                req.body
            );
            const httpResponse: HttpResponseModel = this.institutionQuery.putInstitution(
                updated
            );
            return res.status(httpResponse.code).send(httpResponse);
        } catch (e) {
            next({ name: e.name, message: e.message });
        }
    }

    @Delete(":id")
    @Middleware(adminRequired)
    async deleteInstitution(req: Request, res: Response, next: NextFunction) {
        try {
            const deleted: number = await this.institutionService.deleteInstitution(
                parseInt(req.params.id)
            );
            const httpResponse: HttpResponseModel = this.institutionQuery.deleteInstitution(
                deleted
            );
            return res.status(httpResponse.code).send(httpResponse);
        } catch (e) {
            next({ name: e.name, message: e.message });
        }
    }
}
