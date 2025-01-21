export interface AccountData {
  fullName: string;
  firstName: string;
  balance: number;
  currency: string;
}

export interface UserModel {
  id?: string;
  username?: string;
  email?: string;
  password?: string;
  token?: string;
}
