import { Injectable } from '@nestjs/common';
import { CommentsCreateDto } from '../dto/comments.create.dto';

@Injectable()
export class CommentsService {
  async getAllComments() {
    return 'world';
  }

  async createComment(id: string, comments: CommentsCreateDto) {
    return 'hello';
  }

  async plusLike(id: string) {}
}
