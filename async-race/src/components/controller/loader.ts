// export default class Loader {
//   baseUrl: string;

//   garageUrl: string;

//   engineUrl: string;

//   winnersUrl: string;

//   constructor(baseUrl = 'http://127.0.0.1:3000', garageUrl = `${baseUrl}/garage`, 
//     engineUrl = `${baseUrl}/engine`, winnersUrl = `${baseUrl}/winners`) {
//     this.baseUrl = baseUrl;
//     this.garageUrl = garageUrl;
//     this.engineUrl = engineUrl;
//     this.winnersUrl = winnersUrl;
//   }

//   async getCars(page?: number, limit = 7) {
//     try {
//       const response = await fetch(`${this.garageUrl}?_page=${page}&_limit=${limit}`);
      
//     } catch (error) {
//       console.log(error);
//     }
//   }
// }