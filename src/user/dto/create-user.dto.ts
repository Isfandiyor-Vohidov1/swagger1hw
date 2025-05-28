import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty({ example: 'Iskandar', description: 'Isfandiyor' })
    name?: string;

    @ApiProperty({ example: 'securePassword123', description: 'QWERTYUIOP{}l' })
    password: string;
}
