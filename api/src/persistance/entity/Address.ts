import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { CategoryProductEntity } from './CategoryProduct';
import { UserEntity } from './User';

@Entity('adress')
export class AddressEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  alias: string;

  @Column({ nullable: false })
  street: string;

  @Column({ nullable: false })
  buildingNumber: string;

  @Column({ nullable: true })
  reference: string;

  @Column("numeric", { nullable: false })
  lon: number;

  @Column("numeric", { nullable: false })
  lat: number;

  @Column()
  userId: number;

  @ManyToOne(type => UserEntity, UserEntity => UserEntity.addresses, { onDelete: "CASCADE" })
  user: UserEntity;

}
