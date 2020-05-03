import { Entity, PrimaryGeneratedColumn, Column, Index, OneToMany } from "typeorm";
import { SubscriptionEntity } from './Subscription';
import { OrderEntity } from './Order';

@Entity("institution")
export class InstitutionEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("text")
    name: string;

    @Column("text")
    address: String;

    @Index("password-index")
    @Column("text")
    password: String;

    @Column("simple-array")
    schedule: string[];

    @OneToMany(type => SubscriptionEntity, subscription => subscription.institution)
    public subscriptions: SubscriptionEntity[];

    @OneToMany(type => OrderEntity, order => order.institution)
    public orders: OrderEntity[];
}
