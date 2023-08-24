import { Injectable } from '@nestjs/common';
import { CreateUserInputs } from './dto/create-user.input';
import { UserRepository } from './user.repository';
import { UserUpdateDto } from './dto/update-user-input';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly userRepo: UserRepository) {}

  public async createUser(createUserInputs: CreateUserInputs) {
    return this.userRepo.createUser(createUserInputs);
  }


  public async getAllUser(){
    return this.userRepo.getAllUser();
  }
 
  public async deleteUserById(id):Promise<Boolean>{
    console.log(id)
    return this.userRepo.deleteUserById(id);
  }

  public async updateUser(userId:string,updateFields:UserUpdateDto){
    return this.userRepo.updateUser(userId,updateFields);
  }

  public async getUserById(id) {
    // select * from users left join post on user.user_id = post.user_id where users.user_id = ''
    return this.userRepo
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.post', 'p')
      .where('user.id =:id', { id })
      .getOne();
  }
}
