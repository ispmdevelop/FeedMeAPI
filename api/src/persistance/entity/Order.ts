import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './User';
import { InstitutionEntity } from './Intitution';
import { ProductEntity } from './Product';

@Entity('order')
export class OrderEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantity!: number;

  @Column('date')
  date: Date;

  @Column()
  schedule: String;

  @Column()
  userId!: number;

  @Column()
  productId!: number;

  @Column()
  institutionId!: number;

  @Column('boolean', { default: false })
  ready!: boolean;

  @Column('boolean', { default: false })
  delivered!: boolean;

  @ManyToOne((type) => UserEntity, (user) => user.orders, {
    onDelete: 'CASCADE',
  })
  user: UserEntity;

  @ManyToOne((type) => ProductEntity, (product) => product.orders, { onDelete: 'CASCADE' })
  product: ProductEntity;

  @ManyToOne((type) => InstitutionEntity, (institution) => institution.orders, { onDelete: 'CASCADE' })
  institution: InstitutionEntity;
}
