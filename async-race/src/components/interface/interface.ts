export interface Car {
  name: string;
  color: string;
  id?: number;
}

export interface Winner {
  id: number;
  time: number;
  wins?: number;
}

export interface WinnersPage {
  page: number;
  limit?: number;
  sort?: string;
  order?: string;
}

export interface CarWinner extends Car {
  time: number;
}

export interface StartDriving {
  success?: boolean;
  id: number;
  time: number;
  wins?: number;
}

export interface WinnersItem {
  index: number;
  color: string;
  name: string;
  wins: number;
  time: number;
}

export interface CarControl {
  startBtn: HTMLButtonElement;
  stopBtn: HTMLButtonElement;
  car: HTMLElement;
  btnRemove: HTMLButtonElement;
  btnSelect: HTMLButtonElement;
}

export interface AllCars {
  count: string | null;
  items: Array<Car>;
}

export interface Attributes {
  [key: string]: string;
}

export interface Animate {
  [key: string]: number;
}
