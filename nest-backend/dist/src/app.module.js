"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const database_module_1 = require("./database/database.module");
const hello_world_module_1 = require("./hello-world/hello-world.module");
const hello_world_controller_1 = require("./hello-world/hello-world.controller");
const hello_world_service_1 = require("./hello-world/hello-world.service");
const drizzle_module_1 = require("./drizzle/drizzle.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [config_1.ConfigModule.forRoot({
                envFilePath: ['.env.development', '.env.production'],
                isGlobal: true
            }), database_module_1.DatabaseModule, hello_world_module_1.HelloWorldModule, drizzle_module_1.DrizzleModule],
        controllers: [app_controller_1.AppController, hello_world_controller_1.HelloWorldController],
        providers: [app_service_1.AppService, hello_world_service_1.HelloWorldService]
    })
], AppModule);
//# sourceMappingURL=app.module.js.map