import { HttpStatus } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { getUserByUserNameService } from '../../user/services/get-user-by-username';
import * as passwordHash from 'password-hash';

export interface ValidateTokenServiceInput {
  token: string;
}

export const validateTokenService = async ({
  token,
}: ValidateTokenServiceInput) => {
  try {
    if (!token)
      return {
        status: HttpStatus.UNAUTHORIZED,
        message: 'No Access Token provided.',
        isError: true,
      };
    const invalidDecode = jwt.decode(token);
    if (!invalidDecode)
      return {
        status: HttpStatus.BAD_REQUEST,
        message: 'Authorization Token has invalid format',
        isError: true,
      };
    const decoded: any = jwt.verify(token, String(process.env.PASS_KEY));

    if (!decoded)
      return {
        status: HttpStatus.BAD_REQUEST,
        message: 'Cannot decode Access Token.',
        isError: true,
      };

    const tokenDetails = await getUserByUserNameService({
      userName: decoded.userName,
    });

    if (!tokenDetails) {
      return {
        status: HttpStatus.UNAUTHORIZED,
        message: 'User token does not exists.',
        isError: true,
      };
    }

    return {
      status: HttpStatus.OK,
      message: 'User token is valid.',
      isError: false,
    };
  } catch (err) {
    if (err.message === 'invalid signature') {
      return {
        status: HttpStatus.BAD_REQUEST,
        message: 'Token has invalid signature.',
        isError: true,
      };
    } else {
      throw new Error(err);
    }
  }
};
