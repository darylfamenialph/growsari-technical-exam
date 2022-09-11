import { Injectable } from '@nestjs/common';
import { getUserDetailsByTokenService } from './services/get-user-by-token';
import {
  getUserByUserNameService,
  GetUserByUserNameServiceInput,
} from './services/get-user-by-username';
import { loginService, LoginServiceInput } from './services/login';

@Injectable()
export class UserFacadeService {
  async getUserByUserName(input: GetUserByUserNameServiceInput) {
    return getUserByUserNameService(input);
  }

  async login(input: LoginServiceInput) {
    return loginService(input);
  }

  async getUserByToken(token: string) {
    return getUserDetailsByTokenService(token);
  }
}
