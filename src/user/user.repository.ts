import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/database/base.respoitory';
import { DataSource } from 'typeorm';
import { CreateUserInputs } from './dto/create-user.input';
import { User } from './entities/user.entity';
import { UserUpdateDto } from './dto/update-user-input';

@Injectable()
export class UserRepository extends BaseRepository<User> {
  constructor(private readonly dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  public async createUser(createUserInputs: CreateUserInputs) {
    return this.save({
      fullname: createUserInputs.fullname,
      phonenumber: createUserInputs.phonenumber,
    });
  }

  public async deleteUserById(userid){
      console.log(userid)
      return (await this.softDelete(userid)).affected>0;
  }
  public async getAllUser(){
    return this.find();
  }

  public async updateUser(userid:string,updateFields:UserUpdateDto){

      if(updateFields?.fullname){
      const item=await this.update(userid,{fullname:updateFields?.fullname,phonenumber:updateFields?.phonenumber})
      return 'UPDATED SUCCESSFULLY'
      }
  }
 
}
