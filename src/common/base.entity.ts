import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CommonBaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ default: false })
  isDeleted: Boolean;
}
