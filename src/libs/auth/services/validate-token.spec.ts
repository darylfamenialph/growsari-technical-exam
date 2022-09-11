import { HttpStatus } from '@nestjs/common';
import { validateTokenService } from './validate-token';

describe('Validate Token Behavior', () => {
  it('should return No Access Token provided object', async () => {
    const token = null;
    const result = await validateTokenService({ token });
    expect(result).toEqual({
      status: HttpStatus.UNAUTHORIZED,
      message: 'No Access Token provided.',
      isError: true,
    });
  });

  it('should return Authorization Token has invalid format object', async () => {
    const token = 'aaaaaaa-test';
    const result = await validateTokenService({ token });
    expect(result).toEqual({
      status: HttpStatus.BAD_REQUEST,
      message: 'Authorization Token has invalid format',
      isError: true,
    });
  });

  it('should return invalid signature error', async () => {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6InRlc3QtdXNlci05IiwiaWF0IjoxNjYyODkxMzI1fQ.TJL1u6WBN1x8Vb8U3rPNfhUX9-cpUBe2d47u5HV4Noo';

    const result = await validateTokenService({ token });
    expect(result).toEqual({
      status: HttpStatus.BAD_REQUEST,
      message: 'Token has invalid signature.',
      isError: true,
    });
  });

  it('should return User token does not exists object', async () => {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6InRlc3QtdXNlci05IiwiaWF0IjoxNjYyODkxMjc0fQ.blLPNf5cW0bmjjINfEWvd5_HRui7x_F6F161hZ88MCA';
    const result = await validateTokenService({ token });
    expect(result).toEqual({
      status: HttpStatus.UNAUTHORIZED,
      message: 'User token does not exists.',
      isError: true,
    });
  });

  it('should return User token is valid object', async () => {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6InRlc3QtdXNlci0xIiwiaWF0IjoxNjYyODkxMTQ4fQ.XNC0GAmpM9ugtbKad122Ks6-4kdfsPvYMM1tAPa1_40';
    const result = await validateTokenService({ token });
    expect(result).toEqual({
      status: HttpStatus.OK,
      message: 'User token is valid.',
      isError: false,
    });
  });
});
