import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { FeedbackDto } from './feedback.dto';

@Injectable()
export class FeedbackService {
  constructor(private prisma: PrismaService) {}

  async create(data: FeedbackDto) {
    return this.prisma.feedback.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.feedback.findMany({
      select: {
        fullName: true,
        email: true,
        comment: true,
        createdAt: true,
      },
    });
  }
}
