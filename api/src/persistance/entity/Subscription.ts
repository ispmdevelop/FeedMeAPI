import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './User';
import { InstitutionEntity } from './Intitution';

@Entity('subscription')
export class SubscriptionEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public userId!: number;

  @Column()
  public institutionId!: number;

  @ManyToOne((type) => UserEntity, (user) => user.subscriptions, { onDelete: 'CASCADE' })
  public user: UserEntity;

  @ManyToOne((type) => InstitutionEntity, (institution) => institution.subscriptions, { onDelete: 'CASCADE' })
  public institution: InstitutionEntity;
}
