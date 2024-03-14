import { ObjectType, Field, Int, extend } from '@nestjs/graphql';
import { CommonBaseEntity } from 'src/common/base.entity';
import {
  Column,
  // CreateDateColumn,
  Entity,
  Timestamp,
  // UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class User extends CommonBaseEntity {
  @Column()
  @Field()
  firstName: string;

  @Column()
  @Field()
  lastName: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  password: string;

  @Column({ nullable: true })
  @Field()
  phoneNumber: string;
}
