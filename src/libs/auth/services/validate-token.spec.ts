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

  it('should return Cannot decode Access Token object', async () => {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.gZ4ohtQZTAWpAIyupTZjuJvy5nUbLXhKHg8jvPWwvrg';
    // const result = await validateTokenService({ token });
    expect(await validateTokenService({ token })).toThrow();
    //  .toEqual({
    //   status: HttpStatus.BAD_REQUEST,
    //   message: 'Cannot decode Access Token.',
    //   isError: true,
    // });
  });

  it('should return User token does not exists object', async () => {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.gZ4ohtQZTAWpAIyupTZjuJvy5nUbLXhKHg8jvPWwvrg';
    const result = await validateTokenService({ token });
    expect(result).toEqual({
      status: HttpStatus.UNAUTHORIZED,
      message: 'User token does not exists.',
      isError: true,
    });
  });

  it('should return User token is not valid object', async () => {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.gZ4ohtQZTAWpAIyupTZjuJvy5nUbLXhKHg8jvPWwvrg';
    const result = await validateTokenService({ token });
    expect(result).toEqual({
      status: HttpStatus.UNAUTHORIZED,
      message: 'User token is not valid.',
      isError: true,
    });
  });

  it('should return User token is valid object', async () => {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.gZ4ohtQZTAWpAIyupTZjuJvy5nUbLXhKHg8jvPWwvrg';
    const result = await validateTokenService({ token });
    expect(result).toEqual({
      status: HttpStatus.OK,
      message: 'User token is valid.',
      isError: false,
    });
  });
});
