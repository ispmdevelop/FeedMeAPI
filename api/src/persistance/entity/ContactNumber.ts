import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('contactNumber')
export class ContactNumberEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ nullable: false })
  public name: string;

  @Column({ nullable: false })
  public number: string;

  @Column({ nullable: false })
  public active: boolean;
}
