export interface User {
  _id: string;

  username: string;

  password: string;

  name: string;

  status: 'active' | 'inactive' | 'deleted' | 'blocked';
}

export const MockUsers: User[] = [
  {
    _id: 'testId1',
    username: 'test-user-1',
    password: 'hashPassword1',
    name: 'Test User 1',
    status: 'active',
  },
  {
    _id: 'testId2',
    username: 'test-user-2',
    password: 'hashPassword2',
    name: 'Test User 2',
    status: 'active',
  },
  {
    _id: 'testId3',
    username: 'test-user-3',
    password: 'hashPassword3',
    name: 'Test User 3',
    status: 'inactive',
  },
  {
    _id: 'testId4',
    username: 'test-user-4',
    password: 'hashPassword4',
    name: 'Test User 4',
    status: 'deleted',
  },
  {
    _id: 'testId5',
    username: 'test-user-5',
    password: 'hashPassword5',
    name: 'Test User 5',
    status: 'blocked',
  },
];
