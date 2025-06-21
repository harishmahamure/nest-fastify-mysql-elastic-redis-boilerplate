import { Injectable, OnModuleInit } from '@nestjs/common';
import { logger } from 'elastic-apm-node';
import { createClient, RedisClientType } from 'redis';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class RedisService implements OnModuleInit {
  private redisClient: RedisClientType;

  constructor(private configService: ConfigService) {
    this.redisClient = createClient({
      url: this.configService.get('redis.host'),
    });

    this.redisClient.on('connect', () => {
      logger.info('Connected to Redis');
    });

    this.redisClient.on('ready', () => {
      logger.info('Redis client ready');
    });

    this.redisClient.on('error', (error) => {
      logger.error('Error connecting to Redis:', error);
    });
  }

  async onModuleInit() {
    await this.redisClient.connect();
    await this.redisClient.ping();
  }

  getClient(): RedisClientType {
    return this.redisClient;
  }
}
