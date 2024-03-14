import { Field } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CommonBaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ default: false })
  @Field()
  isDeleted: Boolean;
}
