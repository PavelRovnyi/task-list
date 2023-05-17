export interface Post {
  id: number;
  title: string;
  body: string;
  userId: string;
  [key: string]: number | string;
}

export interface Option {
  value: string;
  name: string;  
}