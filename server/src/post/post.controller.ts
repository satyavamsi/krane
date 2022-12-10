import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { PostService } from './post.service';

@Controller('/api/post')
export class PostController {
  constructor(private readonly postsService: PostService) {}

  @Post() create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  @Get() findAll() {
    return this.postsService.findAll();
  }
}
