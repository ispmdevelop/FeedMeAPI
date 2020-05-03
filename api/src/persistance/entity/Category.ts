import { Entity, PrimaryGeneratedColumn, Column, Index, OneToMany } from 'typeorm';
import { CategoryProductEntity } from './CategoryProduct';

@Entity('category')
export class CategoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: false })
  name: string;

  @OneToMany((type) => CategoryProductEntity, (CategoryProduct) => CategoryProduct.category)
  public products: CategoryProductEntity[];
}
