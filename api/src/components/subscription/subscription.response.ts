import { SubscriptionDto } from 'src/shared/dto/subscription.dto';
import { HttpResponseModel } from 'src/shared/models/httpResponseModel';

export class SubscriptionQuery {

    getAllSubscriptions(subscriptions: Array<SubscriptionDto>): HttpResponseModel {
        if (subscriptions.length == 0) {
            return { code: 404, message: "Not Found" };
        }
        return { code: 200, data: subscriptions };
    }

    getSubscriptionsByUserId(subscriptions: Array<SubscriptionDto>): HttpResponseModel {
        if (subscriptions.length == 0) {
            return { code: 404, message: "Not Found" };
        }
        return { code: 200, data: subscriptions };
    }

    getSubscription(subscription: SubscriptionDto): HttpResponseModel {
        if (subscription == null) {
            return { code: 404, message: "Not Found" };
        }
        return { code: 200, data: subscription };
    }

    postSubscription(subscription: SubscriptionDto) {
        if (subscription == null) {
            return { code: 404, message: "Not Created" };
        }
        return { code: 201, data: subscription };
    }

    deleteSubscription(deleted: number) {
        if (deleted == 0) {
            return { code: 404, message: "deletedFailed" };
        }
        return { code: 200, data: deleted };
    }
}