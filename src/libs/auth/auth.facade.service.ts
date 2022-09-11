import { Injectable } from '@nestjs/common';
import {
  ValidateTokenServiceInput,
  validateTokenService,
} from './services/validate-token';

@Injectable()
export class AuthFacadeService {
  async validateToken(input: ValidateTokenServiceInput) {
    return validateTokenService(input);
  }
}
