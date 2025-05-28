import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<import("./models/user.model").User>;
    findAll(): Promise<import("./models/user.model").User[]>;
    findOne(id: string): Promise<import("./models/user.model").User | null>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("./models/user.model").User>;
    remove(id: string): Promise<{
        data: {};
    }>;
}
