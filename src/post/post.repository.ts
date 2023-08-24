import { Injectable } from '@nestjs/common/decorators';
import { BaseRepository } from 'src/database/base.respoitory';
import { DataSource } from 'typeorm';
import { CreatePostInput } from './dto/create-post.input';
import { Post } from './entities/post.entity';

@Injectable()
export class PostRepository extends BaseRepository<Post> {
  constructor(private readonly dataSource: DataSource) {
    super(Post, dataSource.createEntityManager());
  }

  public async getAllpost(){
    return this.find();
  }
  
  async createPost(createPostInput: CreatePostInput) {
    return this.save({
      postname: createPostInput.postName,
      postorder: createPostInput.postorder,
      userId: createPostInput.userId,
    });
  }

  async deletePost(postid):Promise<Boolean>{
      return (await this.softDelete(postid)).affected>0;
  }
}
