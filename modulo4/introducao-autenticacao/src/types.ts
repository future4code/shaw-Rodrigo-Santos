export type user = {
  id: string;
  email: string;
  password: string;
  name: string;
  nickname: string;
};

export type user1 = {
  id: string;
  email: string;
  password: string;
};

export interface AuthenticatorData {
  id: string;
}
