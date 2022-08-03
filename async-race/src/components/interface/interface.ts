export interface Car {
  name: string,
  color: string,
  id?: 1,
  time?: number;
}

export interface StartDriving {
  success: boolean;
  id: number;
  time: number;
}