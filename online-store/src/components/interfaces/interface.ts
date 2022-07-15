export interface Filter {
  name: string;
  price: string;
  year: string;
  offer: string | boolean;
  decoration: string;
  typeInsert: string;
  typeMetall: string;
  image: string;
  active?: boolean;
}