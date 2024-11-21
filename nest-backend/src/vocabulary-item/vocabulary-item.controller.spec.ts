import { Test, TestingModule } from '@nestjs/testing';
import { VocabularyItemController } from './vocabulary-item.controller';

describe('VocabularyItemController', () => {
  let controller: VocabularyItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VocabularyItemController],
    }).compile();

    controller = module.get<VocabularyItemController>(VocabularyItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
