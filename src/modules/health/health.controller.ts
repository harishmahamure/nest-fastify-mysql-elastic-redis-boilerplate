import { Controller, Get } from '@nestjs/common';
import { HealthService } from './health.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { HealthResponseDto } from './dto/health.response';

@ApiTags('health')
@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get('/')
  @ApiOperation({ summary: 'Check the health of the application' })
  @ApiResponse({
    status: 200,
    description: 'The health of the application',
    type: HealthResponseDto,
  })
  checkHealth(): HealthResponseDto {
    return this.healthService.checkHealth();
  }
}
