import { Controller, Get } from '@nestjs/common';
import { CatService } from './cat.service';

@Controller('cat')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Get('/meow')
  getMeow(): string {
    return this.catService.getMeow();
  }
}
