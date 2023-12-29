import { IsString, IsNotEmpty } from 'class-validator';

export class FeedbackDto {
  @IsNotEmpty()
  @IsString()
  readonly fullName: string;

  @IsNotEmpty()
  @IsString()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly comment: string;
}
