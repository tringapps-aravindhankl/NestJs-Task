import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { CreateUserInputs } from './dto/create-user.input';
import { User } from './entities/user.entity';
import { UserService } from './user.service';
import { UserUpdateDto } from './dto/update-user-input';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  public async createUser(
    @Args('createUserInputs') createUserInputs: CreateUserInputs,
  ) {
    return this.userService.createUser(createUserInputs);
  }

  @Query(() => User)
  public async getUserById(@Args('id') id: string) {
    return this.userService.getUserById(id);
  }

  @Query(()=>[User])
  public async getAllUser(){
    return this.userService.getAllUser();
  }


  @Mutation(()=> Boolean)
  public async deleteUserById(@Args('id') id:string){
    console.log(id)
    return this.userService.deleteUserById(id);
  }
 
  @Mutation(()=>String)
  public async updateUser(
  @Args('userid') userId:string,
  @Args('updateFields')updateFields:UserUpdateDto,
  ){
    return this.userService.updateUser(userId,updateFields)
  }
  
}
