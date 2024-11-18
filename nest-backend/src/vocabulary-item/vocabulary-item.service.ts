import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class VocabularyItemService {
  constructor(private prisma: PrismaService) {}

  async getVocabularyItemById(id: string) {
    return this.prisma.vocabularyItem.findUnique({ where: { id } });
  }

  async getVocabularyItems() {
    return this.prisma.vocabularyItem.findMany();
  }
}
