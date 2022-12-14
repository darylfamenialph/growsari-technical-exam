import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './libs/auth/auth.module';
import { DogFactsModule } from './libs/dog-facts/dog-facts.module';
import { UserModule } from './libs/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env.${process.env.NODE_ENV ?? 'dev'}`, '.env'],
      isGlobal: true,
    }),
    AuthModule,
    UserModule,
    DogFactsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
