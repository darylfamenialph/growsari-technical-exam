import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { UserFacadeService } from './user.facade.service';

@Controller('/api/user')
export class UserFacadeController {
  constructor(private readonly _userFacadeService: UserFacadeService) {}

  @Post('/login')
  async login(
    @Body('username') userName: string,
    @Body('password') password: string,
    @Body('basic_token') basicToken: string,
    @Body('api_key') apiKey: string,
    @Res() res: Response,
  ) {
    try {
      if (!(userName && password && basicToken && apiKey)) {
        res.status(HttpStatus.BAD_REQUEST).json({
          status: HttpStatus.BAD_REQUEST,
          message:
            'username, password, basic_token and api_key are required parameters',
        });
      }
      const result = await this._userFacadeService.login({
        userName,
        password,
        basicToken,
        apiKey,
      });

      res.status(result.httpStatus).json({
        status: result.httpStatus,
        data: result.data,
        timestamp: new Date(),
      });
    } catch (err) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        message: err.message,
        timestamp: new Date(),
      });
    }
  }
}
