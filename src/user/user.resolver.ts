import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.create(createUserInput);
  }

  @Query(() => [User], { name: 'users' })
  findAll() {
    this.userService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('userid') id: string) {
    return this.userService.findOne(id);
  }

  @Mutation(() => User)
  removeUser(@Args('userid') id: string) {
    return this.userService.remove(id);
  }
}
