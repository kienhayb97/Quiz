export interface User {
  id?: number;
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  birthday: Date;
  address: string;
  phonenumber: number;
  password: string;
  role: string[];
}
