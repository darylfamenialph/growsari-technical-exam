import * as jwt from 'jsonwebtoken';

export interface GenerateAccessTokenServiceInput {
  userName: string;
  secretKey: string;
  expiresIn?: string;
}

export const generateAccessTokenService = async ({
  userName,
  secretKey,
  expiresIn,
}: GenerateAccessTokenServiceInput): Promise<string> => {
  return new Promise((resolve, reject) => {
    const data = { userName };
    jwt.sign(data, secretKey, { expiresIn }, (err, token) => {
      if (err) reject(err.message);
      else resolve(token);
    });
  });
};
