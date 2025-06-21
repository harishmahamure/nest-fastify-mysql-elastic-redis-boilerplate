# NEST JS FASTIFY ELASTICSEARCH REDIS MYSQL BOILERPLATE

A powerful backend application built with NestJS, featuring Elasticsearch, Redis, and MySQL integration.

## Features

- **NestJS Framework**: Built on top of Node.js with full TypeScript support
- **Database Integration**: MySQL with TypeORM for robust data persistence
- **Caching**: Redis integration for high-performance caching
- **Search Engine**: Elasticsearch integration for powerful search capabilities
- **API Documentation**: Swagger/OpenAPI integration
- **Performance Monitoring**: Elastic APM integration
- **Authentication**: JWT-based authentication system
- **Fast Server**: Fastify as the underlying HTTP framework
- **Type Safety**: Full TypeScript support with strict type checking
- **Testing**: Comprehensive testing setup with Jest

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (LTS version recommended)
- Yarn package manager
- MySQL
- Redis
- Elasticsearch
- Docker (optional, for containerization)

## Environment Setup

1. Clone the repository
2. Copy the sample environment file:
   ```bash
   cp .sample.env .env
   ```
3. Update the environment variables in `.env` with your configuration

## Installation

```bash
$ yarn install
```

## Running the Application

```bash
# Development mode
$ yarn run dev

# Production mode
$ yarn run start:prod

# Debug mode
$ yarn run start:debug
```

## Testing

```bash
# Unit tests
$ yarn run test

# E2E tests
$ yarn run test:e2e

# Test coverage
$ yarn run test:cov
```

## Project Structure

```
src/
├── config/         # Configuration files
├── controllers/    # Route controllers
├── services/       # Business logic
├── entities/       # TypeORM entities
├── interfaces/     # TypeScript interfaces
├── middleware/     # Custom middleware
└── main.ts         # Application entry point
```

## API Documentation

Once the application is running, you can access the Swagger documentation at:
- Development: http://localhost:3000/api-docs

## Dependencies

### Main Dependencies
- NestJS v11
- TypeORM
- Elasticsearch v9
- Redis v5
- Fastify
- JWT

### Development Dependencies
- TypeScript
- ESLint
- Prettier
- Jest
- SWC

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is [UNLICENSED](LICENSE)

## Support

For support, please open an issue in the repository or contact the development team.
