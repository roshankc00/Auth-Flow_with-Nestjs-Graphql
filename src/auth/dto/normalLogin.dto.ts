import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class NormalLoginDto {
  @Field()
  email: string;

  @Field()
  password: string;
}
