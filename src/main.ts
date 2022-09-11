import { HttpStatus } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  app.use((req, res, next) => {
    const authToken = req.headers['authorization'];
    if (req.originalUrl === '/version') {
      next();
      return;
    }
    const authService = app.get<AuthService>(AuthService);
    authService.validateToken(authToken).then((result) => {
      if (result.isError) {
        res
          .status(HttpStatus.FORBIDDEN)
          .json({ status: HttpStatus.FORBIDDEN, message: result.message });
        return;
      }
      next();
    });
  });

  await app.listen(3000);
}
bootstrap();
