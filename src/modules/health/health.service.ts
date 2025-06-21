import { Injectable } from '@nestjs/common';
import { HealthResponseDto } from './dto/health.response';

@Injectable()
export class HealthService {
  checkHealth(): HealthResponseDto {
    return { status: 'OK' };
  }
}
