
export type persons = Array<{
  Id?: string;
  Name?: string;
  Surname?: string;
  Height?: number;
  Weigth?: number;
  DateOfBirth?: string;
}>;

export type SignInData = {
  username: string;
  password: string;
};

export type IFormCreate = {
  name: string
  surname: string
  DateOfBirth: Date
  height: number
  weight: number
}
