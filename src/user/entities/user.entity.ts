import { ObjectType, Field, Int, extend } from '@nestjs/graphql';
import { CommonBaseEntity } from 'src/common/base.entity';
import {
  Column,
  // CreateDateColumn,
  Entity,
  Timestamp,
  Unique,
  // UpdateDateColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class User extends CommonBaseEntity {
  @Column()
  @Field()
  firstName: string;

  @Column()
  @Field()
  lastName: string;

  @Column()
  @Field()
  email: string;

  @Column({ nullable: true })
  @Field()
  password: string;
}
