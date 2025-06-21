// src/auth/auth.middleware.ts
import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { JwtService } from '../jwt-token/jwt.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const authHeader = req?.headers?.['x-auth'] as string;

    if (!authHeader) {
      return next();
    }

    try {
      const decoded = JwtService.verifyToken(authHeader);
      req.headers['user'] = JSON.stringify(decoded);
      return next();
    } catch (err: any) {
      console.log(err);
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
  }
}
