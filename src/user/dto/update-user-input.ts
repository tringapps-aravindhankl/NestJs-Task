import { Field, InputType } from "@nestjs/graphql";


@InputType()
export class UserUpdateDto{

  @Field()
  fullname: string;

  @Field({nullable:true})
  phonenumber:string;
}