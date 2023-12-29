import { Controller, Get, Post, Body } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { FeedbackDto } from './feedback.dto';

@Controller('feedback')
export class FeedbackController {
  constructor(private feedbackService: FeedbackService) {}

  @Get()
  async findAll() {
    return this.feedbackService.findAll();
  }

  @Post()
  async create(@Body() data: FeedbackDto) {
    return this.feedbackService.create(data);
  }
}
