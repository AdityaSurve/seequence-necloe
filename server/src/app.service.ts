import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { ProjectDto } from './project.dto';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    return await this.prisma.myProjects.findMany({
      select: {
        id: true,
        author: true,
        width: true,
        height: true,
        url: true,
        download_url: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  async create(project: ProjectDto) {
    const { author, width, height, url, download_url } = project;
    return await this.prisma.myProjects.create({
      data: {
        author,
        width,
        height,
        url,
        download_url,
      },
    });
  }

  async update(project: ProjectDto, id: string) {
    const numberId = parseInt(id);
    const { author, width, height, url, download_url } = project;
    return await this.prisma.myProjects.update({
      where: { id: numberId },
      data: {
        author,
        width,
        height,
        url,
        download_url,
      },
    });
  }

  async delete(id: string) {
    const numberId = parseInt(id);
    return await this.prisma.myProjects.delete({
      where: { id: numberId },
    });
  }
}
