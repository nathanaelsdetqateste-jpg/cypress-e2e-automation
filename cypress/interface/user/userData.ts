import { BirthDate } from "../birthdate/birthdate";

export interface User {
  title: "Mr" | "Mrs";
  name: string;
  email: string;
  password: string;
  birthdata: BirthDate;
  firstName: string;
  lastName: string;
  company: string;
  address: string;
  address2: string;
  country: string;
  state: string;
  city: string;
  zipCode: string;
  mobileNumber: string;
}
