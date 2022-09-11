import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
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

  @Get()
  async getUserByToken(@Req() req: Request, @Res() res: Response) {
    try {
      const authHeader: string = req.headers['authorization'];
      if (!authHeader) {
        res.status(HttpStatus.BAD_REQUEST).json({
          status: HttpStatus.BAD_REQUEST,
          message: 'token is required',
          timestamp: new Date(),
        });
      }
      const token = authHeader.split(' ')[1];
      const result = await this._userFacadeService.getUserByToken(token);
      res.status(result.status).json({
        status: result.status,
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
