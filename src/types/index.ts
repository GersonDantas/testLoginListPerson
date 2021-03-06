//My types

export type iunicPerson = {
  Id?: string;
  Name?: string;
  Surname?: string;
  Height?: number;
  Weigth?: number;
  DateOfBirth?: string;
};

export type persons = Array<iunicPerson>;

export type SignInData = {
  username: string;
  password: string;
};

export type IFormCreate = {
  name: string;
  surname: string;
  dateOfBirth: string;
  weight: number;
  height: number;
};

export type buttonsPage = {
  buttonRight: boolean
  buttonLeft: boolean
}
