import { Car } from '../interface/interface';
import { CAR_BRAND, CAR_MODAL } from '../constants/constants';

function getRandomColor(): string {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getRandomNumber(min: number, max: number): number {
  const random = Math.random() * (max - min) + min;
  return Math.floor(random);
}

function getRandomNameCar(): string {
  return `${CAR_BRAND[getRandomNumber(0, CAR_BRAND.length)]} ${CAR_MODAL[getRandomNumber(0, CAR_MODAL.length)]}`;
}

export default function getRandomCar(): Car {
  return {
    name: `${getRandomNameCar()}`,
    color: `${getRandomColor()}`,
  };
}
