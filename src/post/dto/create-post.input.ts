import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreatePostInput {
  @Field()
  postName: string;

  @Field(()=>Int)
  postorder: number;

  @Field()
  userId: string;
}
