import { HttpStatus } from '@nestjs/common';
import { getUserByUserNameService } from './get-user-by-username';
import * as passwordHash from 'password-hash';
import { generateAccessTokenService } from '../../auth/services/generate-access-token';

export interface LoginServiceInput {
  userName: string;
  password: string;
  basicToken: string;
  apiKey: string;
}

export interface LoginServiceOutput {
  isError: boolean;
  data: Record<string, any>;
  httpStatus: number;
}

export const loginService = async ({
  userName,
  password,
  basicToken,
  apiKey,
}: LoginServiceInput): Promise<LoginServiceOutput> => {
  try {
    if (apiKey !== '1234') {
      return {
        isError: true,
        data: { message: 'Invalid API Key' },
        httpStatus: HttpStatus.BAD_REQUEST,
      };
    }

    const decodedBasicToken = Buffer.from(basicToken, 'base64').toString(
      'binary',
    );

    if (decodedBasicToken.split(':')[0] !== 'growsari') {
      return {
        isError: true,
        data: { message: 'Invalid Basic Token' },
        httpStatus: HttpStatus.BAD_REQUEST,
      };
    }
    /** Get UserInfo by username */
    const userDetails = await getUserByUserNameService({ userName });
    if (!userDetails) {
      return {
        isError: true,
        data: { message: 'Invalid Username' },
        httpStatus: HttpStatus.BAD_REQUEST,
      };
    }

    /** Hash and Validate Password */
    if (!passwordHash.verify(password, userDetails.password)) {
      return {
        isError: true,
        data: { message: 'Invalid Password' },
        httpStatus: HttpStatus.BAD_REQUEST,
      };
    }

    /** Sign JWT then return */
    const signedToken = await generateAccessTokenService({
      userName,
      secretKey: String(process.env.PASS_KEY),
      expiresIn: '7d',
    });

    return {
      isError: false,
      data: { token: signedToken },
      httpStatus: HttpStatus.OK,
    };
  } catch (err) {
    throw new Error(err);
  }
};
