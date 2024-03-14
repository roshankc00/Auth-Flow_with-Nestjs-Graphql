import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  email: string;
  password?: string;
  phoneNumber?: string;
}
