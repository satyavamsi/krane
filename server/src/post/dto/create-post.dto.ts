// src/articles/dto/create-article.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @ApiProperty()
  title: string;
  @IsString()
  @IsOptional()
  @MaxLength(300)
  @ApiProperty({ required: false })
  text_body?: string;
}
