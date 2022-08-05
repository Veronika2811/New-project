export interface Car {
  name: string,
  color: string,
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
  index: number, 
  color: string, 
  name: string, 
  wins: number, 
  time: number
}