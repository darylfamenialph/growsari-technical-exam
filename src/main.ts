import { HttpStatus } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AuthFacadeService } from './libs/auth/auth.facade.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  // app.use((req, res, next) => {
  //   const authHeader: string = req.headers['authorization'];
  //   if (req.originalUrl === '/version') {
  //     next();
  //     return;
  //   }

  //   const auth = authHeader?.split(' ');

  //   if (!auth || auth.length < 2) {
  //     res.status(HttpStatus.FORBIDDEN).json({
  //       status: HttpStatus.FORBIDDEN,
  //       message: 'Authorization Header is required and should be valid.',
  //     });
  //     return;
  //   }

  //   if (auth[0] !== 'Bearer') {
  //     res.status(HttpStatus.FORBIDDEN).json({
  //       status: HttpStatus.FORBIDDEN,
  //       message: 'Authorization Type not supported.',
  //     });
  //     return;
  //   }

  //   const authService = app.get<AuthFacadeService>(AuthFacadeService);
  //   authService.validateToken({ token: auth[1] }).then((result) => {
  //     if (result.isError) {
  //       res.status(HttpStatus.FORBIDDEN).json({
  //         status: HttpStatus.FORBIDDEN,
  //         message: result.message,
  //         timestamp: new Date(),
  //       });
  //       return;
  //     }
  //     next();
  //   });
  // });

  await app.listen(3005);
}
bootstrap();
