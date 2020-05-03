import { Entity, PrimaryGeneratedColumn, Column, Index, OneToMany } from 'typeorm';
import { OrderEntity } from './Order';
import { CategoryProductEntity } from './CategoryProduct';

@Entity('product')
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  name: string;

  @Column('float')
  price: number;

  @Column('bool')
  active: boolean;

  @Column('text')
  description: String;

  @Column('text')
  imageName: String;

  @OneToMany((type) => OrderEntity, (order) => order.product)
  public orders: OrderEntity[];

  @OneToMany((type) => CategoryProductEntity, (CategoryProduct) => CategoryProduct.product)
  public categories: CategoryProductEntity[];
}
