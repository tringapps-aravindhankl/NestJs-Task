import { ObjectType, Field } from '@nestjs/graphql';
import { Post } from 'src/post/entities/post.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'users' })
export class User {
  @Field()
  @PrimaryGeneratedColumn('uuid', { name: 'user_id' })
  userid: string;

  @Field()
  @Column({ name: 'user_name' })
  fullname: string;

  @Field()
  @Column({name:'user_phone_number'})
  phonenumber:string;

  @Field(()=>Date)
  @CreateDateColumn({name:'user_create'})
  createAt: Date;

  @Field(()=>Date)
  @UpdateDateColumn()
  updateAt: Date;

  @Field(()=>Date)
  @DeleteDateColumn({name:'user_delete'})
  deleteAt:Date;

  @Field(() => [Post], { nullable: true })
  @OneToMany(() => Post, (post) => post.user)
  post: Post[];
}
