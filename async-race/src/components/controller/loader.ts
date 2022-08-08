import {
  AllCars,
  Car,
  StartDriving,
  Winner,
  WinnersPage,
} from '../interface/interface';
import {
  MAX_ITEMS_PER_PAGE_GARAGE,
  NUMBER_OF_WINS,
  MAX_ITEMS_PER_PAGE_WINNERS,
} from '../constants/constants';

export default class Loader {
  private garageUrl: string;

  private engineUrl: string;

  private winnersUrl: string;

  constructor(
    baseUrl = 'http://127.0.0.1:3000',
    garageUrl = `${baseUrl}/garage`,
    engineUrl = `${baseUrl}/engine`,
    winnersUrl = `${baseUrl}/winners`,
  ) {
    this.garageUrl = garageUrl;
    this.engineUrl = engineUrl;
    this.winnersUrl = winnersUrl;
  }

  async getCars(page?: number, limit = MAX_ITEMS_PER_PAGE_GARAGE): Promise<AllCars | void> {
    try {
      const response = await fetch(
        `${this.garageUrl}?_page=${page}&_limit=${limit}`,
      );
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

  async createCar(body: Car): Promise<Car | void> {
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

  async deleteCar(id: number): Promise<Car | void> {
    try {
      const response = await fetch(`${this.garageUrl}/${id}`, {
        method: 'DELETE',
      });
      return await response.json();
    } catch (error) {
      console.warn(error);
    }
  }

  async updateCar(id: number, body: Car): Promise<Car | void> {
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
      const response = await fetch(
        `${this.engineUrl}?id=${id}&status=${status}`,
        {
          method: 'PATCH',
        },
      );
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
      return response.status === 200
        ? { ...(await response.json()) }
        : { success: false };
    } catch (error) {
      console.warn(error);
    }
  }

  async createWinner(body: Winner): Promise<StartDriving | void> {
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

  async saveWinner({ id, time }: Winner): Promise<StartDriving | void> {
    try {
      const responseStatus = (await fetch(`${this.winnersUrl}/${id}`)).status;
      if (responseStatus === 404) {
        return await this.createWinner({ id, wins: NUMBER_OF_WINS, time });
      }
      const winner = await this.getWinner(id);
      return await this.updateWinner(id, {
        id,
        wins: winner.wins + 1,
        time: time < winner.time ? time : winner.time,
      });
    } catch (error) {
      console.warn(error);
    }
  }

  async getWinner(id: number) {
    try {
      const response = await fetch(`${this.winnersUrl}/${id}`);
      return await response.json();
    } catch (error) {
      console.warn(error);
    }
  }

  async getWinners({
    page,
    limit = MAX_ITEMS_PER_PAGE_WINNERS,
    sort,
    order,
  }: WinnersPage) {
    try {
      const sortingTheTableOfWinners = sort && order ? `&_sort=${sort}&_order=${order}` : '';
      const response = await fetch(
        `${this.winnersUrl}?_page=${page}&_limit=${limit}${
          sortingTheTableOfWinners}`,
      );
      const items = await response.json();

      return {
        items: await Promise.all(
          items.map(async (winner: { id: number }) => ({
            ...winner,
            car: await this.getCar(winner.id),
          })),
        ),
        count: Number(response.headers.get('X-Total-Count')),
      };
    } catch (error) {
      console.warn(error);
    }
  }

  async deleteWinner(id: number): Promise<StartDriving | void> {
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
