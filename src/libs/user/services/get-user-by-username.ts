import { MockAddress } from '../user-address.model';
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
    const fetchedAddress = MockAddress.find(
      (mockAddress) => mockAddress._id === user.userAddressId,
    );

    const fullUserDetails = {
      _id: user._id,
      username: user.username,
      password: user.password,
      name: user.name,
      status: user.status,
      address: fetchedAddress,
    };

    return fullUserDetails;
  } catch (err) {
    throw new Error(err);
  }
};
