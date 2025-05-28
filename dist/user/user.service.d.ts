import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './models/user.model';
export declare class UserService {
    private model;
    constructor(model: typeof User);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findById(id: number): Promise<User | null>;
    update(id: number, UpdateUserDto: UpdateUserDto): Promise<User>;
    remove(id: number): Promise<{
        data: {};
    }>;
}
