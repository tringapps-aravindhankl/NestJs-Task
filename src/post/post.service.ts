/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { PostRepository } from './post.repository';

@Injectable()
export class PostService {
  constructor(private readonly postRepo: PostRepository) {}
  create(createPostInput: CreatePostInput) {
    return this.postRepo.createPost(createPostInput);
  }

  public async getAllpost(){
    return this.postRepo.getAllpost();
  }

  public async deletePost(id) :Promise<Boolean>{
    return this.postRepo.deletePost(id)
  }
}
