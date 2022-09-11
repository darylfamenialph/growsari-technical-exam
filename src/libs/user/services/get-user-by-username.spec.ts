import { UserStatus } from '../enums/user-status';
import { getUserByUserNameService } from './get-user-by-username';

describe('get User by Username', () => {
  describe('Valid User', () => {
    const userName = 'test-user-1';
    const expectedResult = {
      _id: 'testId1',
      username: 'test-user-1',
      password: 'sha1$5a7e1004$1$21e54fd1076ff94e95d1f892bbdca200602a1ba6',
      name: 'Test User 1',
      status: 'active',
    };
    it('should return user object', async () => {
      const result = await getUserByUserNameService({ userName });
      expect(result).toEqual(expectedResult);
    });
  });

  describe('null user', () => {
    const userName = 'test-user-12';
    it('should return user object', async () => {
      const result = await getUserByUserNameService({ userName });
      expect(result).toEqual(null);
    });
  });

  describe('user with status', () => {
    it('should return active', async () => {
      const userName = 'test-user-2';
      const result = await getUserByUserNameService({ userName });
      expect(result.status).toEqual(UserStatus.ACTIVE);
    });

    it('should return inactive', async () => {
      const userName = 'test-user-3';
      const result = await getUserByUserNameService({ userName });
      expect(result.status).toEqual(UserStatus.INACTIVE);
    });

    it('should return deleted', async () => {
      const userName = 'test-user-4';
      const result = await getUserByUserNameService({ userName });
      expect(result.status).toEqual(UserStatus.DELETED);
    });

    it('should return blocked', async () => {
      const userName = 'test-user-5';
      const result = await getUserByUserNameService({ userName });
      expect(result.status).toEqual(UserStatus.BLOCKED);
    });
  });
});
