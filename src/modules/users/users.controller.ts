import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { ApiCreateUser, ApiGetAllUsers } from './decorators/swagger.decorators';
import { ApplyAdminDecorators } from 'src/common/decorators/admin.gaurd';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiCreateUser()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Get()
  @ApplyAdminDecorators()
  @ApiGetAllUsers()
  findAll() {
    return 'This action returns all users';
  }
}
