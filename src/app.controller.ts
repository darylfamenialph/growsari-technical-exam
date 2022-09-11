import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import * as passwordHash from 'password-hash';
import { DogFactsFacadeService } from './libs/dog-facts/dog-facts.facade.service';
import { generateAccessTokenService } from './libs/auth/services/generate-access-token';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  async generateHash() {
    return passwordHash.generate('hashPassword5');
  }
}
