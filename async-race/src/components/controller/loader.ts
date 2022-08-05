/* eslint-disable no-console */
import { Car, Winner, WinnersPage } from '../interface/interface';

export class Loader {
  baseUrl: string;

  garageUrl: string;

  engineUrl: string;

  winnersUrl: string;

  constructor(baseUrl = 'http://127.0.0.1:3000', garageUrl = `${baseUrl}/garage`, 
    engineUrl = `${baseUrl}/engine`, winnersUrl = `${baseUrl}/winners`) {
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

  async getCar(id: number) {
    try {
      const response = await fetch(`${this.garageUrl}/${id}`);
      return await response.json();
    } catch (error) {
      console.warn(error);
    }
  }

  async createCar(body: Car) {
    try {
      const response = await fetch(this.garageUrl, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return await response.json();
    } catch (error) {
      console.warn(error);
    }
  }

  async deleteCar(id: number) {
    try {
      const response = await fetch(`${this.garageUrl}/${id}`, {
        method: 'DELETE',
      });
      return await response.json();
    } catch (error) {
      console.warn(error);
    }
  }

  async updateCar(id: number, body: Car) {
    try {
      const response = await fetch(`${this.garageUrl}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return await response.json();
    } catch (error) {
      console.warn(error);
    }
  }

  async switchEngine(id: number, status: string) {
    try {
      const response = await fetch(`${this.engineUrl}?id=${id}&status=${status}`, {
        method: 'PATCH',
      });
      return await response.json();
    } catch (error) {
      console.warn(error);
    }
  }

  async drive(id: number) {
    try {
      const response = await fetch(`${this.engineUrl}?id=${id}&status=drive`, { 
        method: 'PATCH',
      });
      return response.status === 200 ? { ...(await response.json()) } : { success: false };
    } catch (error) {
      console.warn(error);
    }
  }

  // Winner
  async createWinner(body: Winner) {
    try {
      const response = await fetch(this.winnersUrl, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return await response.json();
    } catch (error) {
      console.warn(error);
    }
  }

  async updateWinner(id: number, body: Winner) {
    try {
      const response = await fetch(`${this.winnersUrl}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return await response.json();
    } catch (error) {
      console.warn(error);
    }
  }
  
  async saveWinner({ id, time }: Winner) {
    try {
      const responseStatus = await (await fetch(`${this.winnersUrl}/${id}`)).status;
      if (responseStatus === 404) {
        return await this.createWinner({ id, wins: 1, time });
      } else {
        const winner = await this.getWinner(id);
        return await this.updateWinner(id, { id, wins: winner.wins + 1, time: time < winner.time ? time : winner.time });
      }
    } catch (error) {
      console.warn(error);
    }
  }

  async getWinner(id: number | undefined) {
    try {
      const response = await fetch(`${this.winnersUrl}/${id}`);
      return await response.json();
    } catch (error) {
      console.warn(error);
    }
  }

  async getWinners( { page, limit = 10, sort, order }: WinnersPage) {
    try {
      const sorting = sort && order ? `&_sort=${sort}&_order=${order}` : '';
      const response = await fetch(`${this.winnersUrl}?_page=${page}&_limit=${limit}` + sorting);
      const items = await response.json();
      return {
        items: await Promise.all(
          items.map(async (winner: { id: number }) => ({ ...winner, car: await this.getCar(winner.id) })),
        ),
        count: Number(response.headers.get('X-Total-Count')),
      };
    } catch (error) {
      console.warn(error);
    }
  }

  async deleteWinner(id: number) {
    try {
      const response = await fetch(`${this.winnersUrl}/${id}`, {
        method: 'DELETE',
      });
      return await response.json();
    } catch (error) {
      console.warn(error);
    }
  }
}




