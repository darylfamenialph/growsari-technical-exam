import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import * as passwordHash from 'password-hash';
import { DogFactsFacadeService } from './libs/dog-facts/dog-facts.facade.service';
import { generateAccessTokenService } from './libs/auth/services/generate-access-token';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly dogFactsFacadeService: DogFactsFacadeService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  async generateHash() {
    return passwordHash.generate('hashPassword5');
  }

  @Post('/token')
  async generateAccessToken() {
    return await generateAccessTokenService({
      userName: 'test-user-1',
      secretKey: String(process.env.PASS_KEY),
      expiresIn: '7d',
    });
  }

  @Get('/dog-facts')
  async getDogFacts() {
    return await this.dogFactsFacadeService.getDogFacts();
  }
}
