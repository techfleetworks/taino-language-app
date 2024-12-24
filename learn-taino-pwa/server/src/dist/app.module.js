"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var config_1 = require("@nestjs/config");
var app_controller_1 = require("./app.controller");
var app_service_1 = require("./app.service");
var cat_controller_1 = require("./cat/cat.controller");
var cat_service_1 = require("./cat/cat.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        common_1.Module({
            imports: [config_1.ConfigModule.forRoot()],
            controllers: [app_controller_1.AppController, cat_controller_1.CatController],
            providers: [app_service_1.AppService, cat_service_1.CatService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
