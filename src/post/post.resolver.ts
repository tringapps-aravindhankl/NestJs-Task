import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { PostService } from './post.service';
import { Post } from './entities/post.entity';
import { CreatePostInput } from './dto/create-post.input';

@Resolver(() => Post)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Mutation(() => Post)
  createPost(@Args('createPostInput') createPostInput: CreatePostInput) {
    return this.postService.create(createPostInput);
  }

  @Mutation(()=> Boolean)
  deletePost(@Args('id') id:string){
    return this.postService.deletePost(id);
  }

  @Query(()=>[Post])
  public async getAllpost(){
    return this.postService.getAllpost();
  }
}
