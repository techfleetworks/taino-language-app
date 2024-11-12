import { Controller, Post, Body, Get } from '@nestjs/common';
import { HelloWorldService } from './hello-world.service';

@Controller('hello-world')
export class HelloWorldController {

    constructor(private readonly helloWorldService: HelloWorldService) {}

    @Get('get-all-names')
    getAllNames() {
        return this.helloWorldService.getAllNames();
    }

    @Post('post-name')
    postName(@Body() body: { name: string }) {
        return this.helloWorldService.postName(body.name);
    }
}
