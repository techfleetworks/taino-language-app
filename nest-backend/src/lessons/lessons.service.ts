import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LessonsService {
    constructor(private prisma: PrismaService) {}
    
      async getLessonById(id: string) {
        return this.prisma.lessons.findUnique({ where: { id } });
      }
    
      async getLessons() {
        return this.prisma.lessons.findMany();
      }
}
