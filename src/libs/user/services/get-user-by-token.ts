import { HttpStatus } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { getUserByUserNameService } from './get-user-by-username';

export const getUserDetailsByTokenService = async (token: string) => {
  try {
    const decodedToken: any = jwt.decode(token);
    if (!decodedToken) {
      return {
        isError: true,
        status: HttpStatus.BAD_REQUEST,
        data: { message: 'Token is not valid' },
      };
    }

    const usernameFromDecodedToken = await getUserByUserNameService({
      userName: decodedToken.userName,
    });

    return {
      isError: false,
      status: HttpStatus.OK,
      data: usernameFromDecodedToken,
    };
  } catch (err) {
    throw new Error(err.message);
  }
};
