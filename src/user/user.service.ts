import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './models/user.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User) private model: typeof User
  ) { }

  async create(createUserDto: CreateUserDto) {
    const newUser = await this.model.create({...createUserDto});
    return newUser;
  }


  async findAll() {
    const users = await this.model.findAll();
    return users;
  }

  async findById(id: number) {
    const user = await this.model.findByPk(id)
    return user;
  }

  async update(id: number, UpdateUserDto: UpdateUserDto) {
    const user = await this.model.update(UpdateUserDto, { where: { id }, returning: true })
    return user[1][0];
  }

  async remove(id: number) {
    await this.model.destroy({ where: { id } })
    return { data: {} };
  }
}
 