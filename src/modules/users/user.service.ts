import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { JwtService } from 'src/modules/jwt-token/jwt.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}
  async createUser(createUserDto: CreateUserDto) {
    const existingUser = await this.getUser(createUserDto.email);
    if (existingUser) {
      return {
        user: existingUser,
        token: JwtService.generateToken({
          id: existingUser.id,
          email: existingUser.email,
          role: existingUser.role,
        }),
      };
    }
    const user = this.userRepository.create(createUserDto);
    const token = JwtService.generateToken({
      id: user.id,
      email: user.email,
      role: user.role,
    });
    const savedUser = await this.userRepository.save(user);
    return {
      user: savedUser,
      token,
    };
  }

  async getUser(email: string) {
    return this.userRepository.findOne({ where: { email } });
  }
}
