import { IsString, IsNotEmpty } from 'class-validator';

export class ProjectDto {
  @IsNotEmpty()
  @IsString()
  readonly author: string;

  @IsNotEmpty()
  @IsString()
  readonly width: string;

  @IsNotEmpty()
  @IsString()
  readonly height: string;

  @IsNotEmpty()
  @IsString()
  readonly url: string;

  @IsNotEmpty()
  @IsString()
  readonly download_url: string;
}
