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
    password: 'sha1$5a7e1004$1$21e54fd1076ff94e95d1f892bbdca200602a1ba6',
    name: 'Test User 1',
    status: 'active',
  },
  {
    _id: 'testId2',
    username: 'test-user-2',
    password: 'sha1$8c872159$1$002962c94af8dc6b77776ad56cdf55da2149bd44',
    name: 'Test User 2',
    status: 'active',
  },
  {
    _id: 'testId3',
    username: 'test-user-3',
    password: 'sha1$f5867338$1$093c880c210d77df83043da52a10f01b4fe4cab1',
    name: 'Test User 3',
    status: 'inactive',
  },
  {
    _id: 'testId4',
    username: 'test-user-4',
    password: 'sha1$ca715309$1$9f4352b786219084f33de017e92756bf0e3b66b5',
    name: 'Test User 4',
    status: 'deleted',
  },
  {
    _id: 'testId5',
    username: 'test-user-5',
    password: 'sha1$2d854501$1$0afabee39c2d8ce51348461be46e3bcebe60f67a',
    name: 'Test User 5',
    status: 'blocked',
  },
];
