import { ObjectType, Field, Int, extend } from '@nestjs/graphql';
import { CommonBaseEntity } from 'src/common/base.entity';
import {
  Column,
  // CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Timestamp,
  Unique,
  // UpdateDateColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class User extends CommonBaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;
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
