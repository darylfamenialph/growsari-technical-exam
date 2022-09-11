import { MockUsers } from '../user.model';

export interface GetUserByUserNameServiceInput {
  userName: string;
}

export const getUserByUserNameService = async ({
  userName,
}: GetUserByUserNameServiceInput) => {
  try {
    const user = MockUsers.find((mockUser) => mockUser.username === userName);
    if (!user) {
      return null;
    }
    return user;
  } catch (err) {
    throw new Error(err);
  }
};
