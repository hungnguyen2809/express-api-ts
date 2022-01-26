export interface UserInfo {
  id: number;
  name: string;
  username: string;
  email?: string | null;
  address?: UserAddress;
  phone?: string | null;
  website?: string | null;
  company?: UserCompaney;
}

export interface UserAddress {
  street?: string | null;
  suite?: string | null;
  city?: string | null;
  zipcode?: string | null;
  geo?: AddressGeo;
}

export interface AddressGeo {
  lat?: string | null;
  lng?: string | null;
}

export interface UserCompaney {
  name?: string | null;
  catchPhrase?: string | null;
  bs?: string | null;
}
