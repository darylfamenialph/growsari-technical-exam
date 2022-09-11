import { HttpStatus } from '@nestjs/common';
import { loginService } from './login';

describe('login', () => {
  describe('valid payload', () => {
    it('should return token data', async () => {
      const payload = {
        userName: 'test-user-1',
        password: 'hashPassword1',
        basicToken: 'Z3Jvd3Nhcmk6==',
        apiKey: '1234',
      };
      const result = await loginService(payload);
      expect(result.isError).toEqual(false);
    });
  });

  describe('invalid payload', () => {
    it('should invalid basic token', async () => {
      const payload = {
        userName: 'test-user-1',
        password: 'hashPassword1',
        basicToken: '1234',
        apiKey: '1234',
      };
      const result = await loginService(payload);
      expect(result).toEqual({
        isError: true,
        data: { message: 'Invalid Basic Token' },
        httpStatus: HttpStatus.BAD_REQUEST,
      });
    });

    it('should return invalid username', async () => {
      const payload = {
        userName: 'invalid-username',
        password: 'hashPassword1',
        basicToken: 'Z3Jvd3Nhcmk6==',
        apiKey: '1234',
      };
      const result = await loginService(payload);
      expect(result).toEqual({
        isError: true,
        data: { message: 'Invalid Username' },
        httpStatus: HttpStatus.BAD_REQUEST,
      });
    });

    it('should return invalid password', async () => {
      const payload = {
        userName: 'test-user-1',
        password: 'hashPassword2',
        basicToken: 'Z3Jvd3Nhcmk6==',
        apiKey: '1234',
      };
      const result = await loginService(payload);
      expect(result).toEqual({
        isError: true,
        data: { message: 'Invalid Password' },
        httpStatus: HttpStatus.BAD_REQUEST,
      });
    });
  });
});
