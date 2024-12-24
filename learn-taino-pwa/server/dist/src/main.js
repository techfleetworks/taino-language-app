"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const PORT = Number.parseInt(process.env.PORT);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    const origins = [process.env.FRONTEND_URL];
    app.enableCors({
        origin: origins,
        credentials: true,
    });
    await app.listen(PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map