import { CatService } from './cat.service';
export declare class CatController {
    private readonly catService;
    constructor(catService: CatService);
    getMeow(): string;
}
