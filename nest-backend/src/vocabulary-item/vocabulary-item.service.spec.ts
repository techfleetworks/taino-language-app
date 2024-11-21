import { Test, TestingModule } from '@nestjs/testing';
import { VocabularyItemService } from './vocabulary-item.service';

describe('VocabularyItemService', () => {
  let service: VocabularyItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VocabularyItemService],
    }).compile();

    service = module.get<VocabularyItemService>(VocabularyItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
