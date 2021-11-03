export interface RegisterFormData {
  name: string;
  email: string;
  password: string;
}

export interface NewCityEntity {
  city: string;
  date: string;
}

export interface NewPostEntity {
  title: string;
  date: string;
  place: string;
}

export type FixMeLater = any;