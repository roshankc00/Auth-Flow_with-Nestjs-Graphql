import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginResponse } from './types/auth.types';
import { UseGuards } from '@nestjs/common';
import { NormalLoginDto } from './dto/normalLogin.dto';
import { GqlAuthGuard } from './guards/gql.auth.guard';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => LoginResponse)
  @UseGuards(GqlAuthGuard)
  async LoginUser(
    @Args('loginUserInput') loginUserInput: NormalLoginDto,
    @Context() context,
  ) {
    return this.authService.loginUser(context.user);
  }
}
