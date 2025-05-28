"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_model_1 = require("./models/user.model");
const sequelize_1 = require("@nestjs/sequelize");
let UserService = class UserService {
    model;
    constructor(model) {
        this.model = model;
    }
    async create(createUserDto) {
        const newUser = await this.model.create({ ...createUserDto });
        return newUser;
    }
    async findAll() {
        const users = await this.model.findAll();
        return users;
    }
    async findById(id) {
        const user = await this.model.findByPk(id);
        return user;
    }
    async update(id, UpdateUserDto) {
        const user = await this.model.update(UpdateUserDto, { where: { id }, returning: true });
        return user[1][0];
    }
    async remove(id) {
        await this.model.destroy({ where: { id } });
        return { data: {} };
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(user_model_1.User)),
    __metadata("design:paramtypes", [Object])
], UserService);
//# sourceMappingURL=user.service.js.map