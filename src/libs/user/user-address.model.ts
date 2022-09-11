export interface UserAddressModel {
  _id: string;
  streetAddress: string;
  barangay: string;
  city: string;
  province: string;
  zip: string;
}

export const MockAddress: UserAddressModel[] = [
  {
    _id: 'useradd1',
    streetAddress: 'test street address',
    barangay: 'test barangay',
    city: 'test city',
    province: 'test province',
    zip: 'test zip',
  },
];
