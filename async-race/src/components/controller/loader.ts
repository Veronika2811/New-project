import { Car } from '../interface/interface';

export default class Loader {
  baseUrl: string;

  garageUrl: string;

  engineUrl: string;

  winnersUrl: string;

  constructor(baseUrl = 'http://127.0.0.1:3000', garageUrl = `${baseUrl}/garage`, engineUrl = `${baseUrl}/engine`, winnersUrl = `${baseUrl}/winners`) {
    this.baseUrl = baseUrl;
    this.garageUrl = garageUrl;
    this.engineUrl = engineUrl;
    this.winnersUrl = winnersUrl;
  }

  async getCars(page?: number, limit = 7) {
    try {
      const response = await fetch(`${this.garageUrl}?_page=${page}&_limit=${limit}`);
      return {
        items: await response.json(),
        count: response.headers.get('X-Total-Count'),
      };
    } catch (error) {
      console.warn(error);
    }
  }

  async createCar(body: Car) {
    try {
      return await (await fetch(this.garageUrl, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      })).json();
    } catch (error) {
      console.warn(error);
    }
  }
}