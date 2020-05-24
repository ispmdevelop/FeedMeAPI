import { Entity, PrimaryGeneratedColumn, Column, Index, OneToMany } from 'typeorm';
import { SubscriptionEntity } from './Subscription';
import { OrderEntity } from './Order';
import { AddressEntity } from './Address';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: false })
  password: string;

  @Column('text')
  name: string;

  @Index('email-index')
  @Column('text', { unique: true })
  email: String;

  @Column('text', { default: 'CLIENT', nullable: false })
  role: String;

  @Column('text')
  phone: String;

  @OneToMany((type) => SubscriptionEntity, (subscription) => subscription.user, {onDelete: "CASCADE"})
  subscriptions: SubscriptionEntity[];

  @OneToMany((type) => OrderEntity, (order) => order.user)
  orders: OrderEntity[];

  @OneToMany(type => AddressEntity, address => address.user, { onDelete: "CASCADE" })
  addresses: AddressEntity[];
}
