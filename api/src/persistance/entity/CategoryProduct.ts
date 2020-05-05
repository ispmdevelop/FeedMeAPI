import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CategoryEntity } from './Category';
import { ProductEntity } from './Product';

@Entity('categoryProduct')
export class CategoryProductEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ nullable: false })
  public categoryId!: number;

  @Column({ nullable: false })
  public productId!: number;

  @ManyToOne((type) => CategoryEntity, (category) => category.products, { onDelete: 'CASCADE' })
  public category: CategoryEntity;

  @ManyToOne((type) => ProductEntity, (product) => product.categories, { onDelete: 'CASCADE' })
  public product: ProductEntity;
}
