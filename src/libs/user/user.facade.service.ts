import { Injectable } from '@nestjs/common';
import {
  getUserByUserNameService,
  GetUserByUserNameServiceInput,
} from './services/get-user-by-username';

@Injectable()
export class UserFacadeService {
  async getUserByUserName(input: GetUserByUserNameServiceInput) {
    return getUserByUserNameService(input);
  }
}
