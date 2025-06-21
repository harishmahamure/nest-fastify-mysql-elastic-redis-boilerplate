import {
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { UserPayload } from 'src/common/dto/user.payload';

export class JwtService {
  static generateToken(payload: UserPayload) {
    try {
      const token = jwt.sign(payload, process.env.JWT_SECRET || 'mysecret', {
        expiresIn: '7d',
      });
      return token;
    } catch (error: any) {
      console.log(error);
      throw new InternalServerErrorException('Failed to generate token');
    }
  }

  static verifyToken(token: string) {
    try {
      return jwt.verify(
        token,
        process.env.JWT_SECRET || 'mysecret',
      ) as UserPayload;
    } catch (error: any) {
      console.log(error);
      throw new UnauthorizedException('Invalid token');
    }
  }
}
