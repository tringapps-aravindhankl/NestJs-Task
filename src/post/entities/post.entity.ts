import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity({ name: 'post' })
export class Post {
  @Field()
  @PrimaryGeneratedColumn('uuid', { name: 'post_id' })
  postid: string;

  @Field()
  @Column({ name: 'post_name' })
  postname: string;


  @Field(()=>Int)
  @Column({name:'post_order'})
  postorder: number;

  @Field(()=>Date)
  @CreateDateColumn({name:'post_create'})
  createAt: Date;


  @Field(()=>Date)
  @UpdateDateColumn({name:'post_update'})
  updateAt: Date;

  @Field(()=>Date)
  @DeleteDateColumn({name:'post_delete'})
  deleteAt:Date;

  @Field()
  @ManyToOne(() => User, (user) => user.post)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Field()
  @Column({ name: 'user_id' })
  userId: string;


}
