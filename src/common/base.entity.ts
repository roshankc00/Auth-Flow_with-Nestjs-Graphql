import { Field } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CommonBaseEntity {
  @Column({ default: false })
  @Field()
  isDeleted: Boolean;
}
