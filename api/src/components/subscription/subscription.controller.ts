import { Request, Response, NextFunction } from "express";
import {
    Controller,
    Middleware,
    Get,
    Put,
    Post,
    Delete,
} from "@overnightjs/core";
import { SubscriptionService } from "./subscription.service";
import { ValidateBody } from "./subscription.middleware";
import { SubscriptionDto } from "../../shared/dto/subscription.dto";
import { HttpResponseModel } from "../../shared/models/httpResponseModel";
import { SubscriptionQuery } from "./subscription.response";
import {
    adminRequired,
    loggedRequired,
    sameUserIdOrAdminUser,
} from "../../helpers/authMiddlewares";

@Controller("api/subscription")
export class SubscriptionController {
    private subscriptionService: SubscriptionService;
    private subscriptionQuery: SubscriptionQuery;
    constructor() {
        this.subscriptionService = new SubscriptionService();
        this.subscriptionQuery = new SubscriptionQuery();
    }

    @Get("")
    @Middleware(adminRequired)
    async getAllSubscriptions(req: Request, res: Response, next: NextFunction) {
        try {
            const subscriptions: Array<SubscriptionDto> = await this.subscriptionService.getAllSubscriptions();
            const httpResponse: HttpResponseModel = this.subscriptionQuery.getAllSubscriptions(
                subscriptions
            );
            return res.status(httpResponse.code).send(httpResponse);
        } catch (e) {
            next({ name: e.name, message: e.message });
        }
    }

    @Get("user/:userid")
    @Middleware(sameUserIdOrAdminUser)
    async getSubscriptionsByUserId(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        try {
            const subscriptions: Array<SubscriptionDto> = await this.subscriptionService.getSubscriptionsByUserId(
                parseInt(req.params.userid)
            );
            const httpResponse: HttpResponseModel = this.subscriptionQuery.getSubscriptionsByUserId(
                subscriptions
            );
            return res.status(httpResponse.code).send(httpResponse);
        } catch (e) {
            next({ name: e.name, message: e.message });
        }
    }

    @Get(":id")
    @Middleware(loggedRequired)
    async getSubscription(req: Request, res: Response, next: NextFunction) {
        try {
            const subscription: SubscriptionDto = await this.subscriptionService.getSubscriptionById(
                parseInt(req.params.id)
            );
            const httpResponse: HttpResponseModel = this.subscriptionQuery.getSubscription(
                subscription
            );
            return res.status(httpResponse.code).send(httpResponse);
        } catch (e) {
            next({ name: e.name, message: e.message });
        }
    }

    @Post("")
    @Middleware([loggedRequired, ValidateBody])
    async postSubscription(req: Request, res: Response, next: NextFunction) {
        try {
            const subscription: SubscriptionDto = await this.subscriptionService.postSubscription(
                req.body
            );
            const httpResponse: HttpResponseModel = this.subscriptionQuery.postSubscription(
                subscription
            );
            return res.status(httpResponse.code).send(httpResponse);
        } catch (e) {
            next({ name: e.name, message: e.message });
        }
    }

    @Delete(":id")
    @Middleware(loggedRequired)
    async deleteSubscription(req: Request, res: Response, next: NextFunction) {
        try {
            const deleted: number = await this.subscriptionService.deleteSubscription(
                parseInt(req.params.id)
            );
            const httpResponse: HttpResponseModel = this.subscriptionQuery.deleteSubscription(
                deleted
            );
            return res.status(httpResponse.code).send(httpResponse);
        } catch (e) {
            next({ name: e.name, message: e.message });
        }
    }
}
