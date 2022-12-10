import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../src/prisma/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}
  create(CreatePostDto: CreatePostDto) {
    const { title, text_body } = CreatePostDto;
    return this.prisma.post.create({ data: { title, textBody: text_body } });
  }
  findAll() {
    return this.prisma.post.findMany();
  }
}
