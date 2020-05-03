import { SubscriptionDto } from "../../shared/dto/subscription.dto";
import { SubscriptionRepository } from "./subscription.repository";
import { SubscriptionEntity } from '../../persistance/entity/Subscription';
import { getRepository } from 'typeorm';

export class SubscriptionService {
    subscriptionRepository: SubscriptionRepository;

    constructor() {
        this.subscriptionRepository = new SubscriptionRepository(getRepository(SubscriptionEntity));
    }

    public async getAllSubscriptions(): Promise<Array<SubscriptionDto>> {
        return await this.subscriptionRepository.findAll(true, ["user", "institution"]);
    }

    public async getSubscriptionById(id: number): Promise<SubscriptionDto> {
        return await this.subscriptionRepository.findById(id);
    }

    public async getSubscriptionsByUserId(userId: number): Promise<Array<SubscriptionDto>> {
        return await this.subscriptionRepository.findByWhereMany({ "userId": userId }, true, ["institution"]);
    }

    public async postSubscription(subscription: SubscriptionDto): Promise<SubscriptionDto> {
        return await this.subscriptionRepository.save(subscription);
    }

    public deleteSubscription(id: number, ): Promise<number> {
        return this.subscriptionRepository.delete(id);
    }
}