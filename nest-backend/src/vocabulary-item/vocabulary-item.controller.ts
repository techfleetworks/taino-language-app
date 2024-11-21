import { Controller, Get } from '@nestjs/common';
import { VocabularyItemService } from './vocabulary-item.service';

@Controller('vocabulary-items')
export class VocabularyItemController {
  constructor(private readonly vocabularyItemService: VocabularyItemService) {}

  @Get('/')
  getVocabularyItems() {
    return this.vocabularyItemService.getVocabularyItems();
  }
}
