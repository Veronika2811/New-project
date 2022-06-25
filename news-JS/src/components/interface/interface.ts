export enum ErrorStatusCode {
  Unauthorized = 401,
  NotFound = 404,
}

export interface Articles {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: SourcesData;
  title: string;
  url: string;
  urlToImage: string;
}

export interface SourcesData {
  id: string;
  name: string;
}

export interface SourcesArray {
  category: string;
  country: string;
  description: string;
  id: string;
  language: string;
  name: string;
  url: string;
}

export interface GetNews {
  articles: [];
  status: string;
  totalResults: number;
}

export interface GetSources {
  sources: SourcesArray[];
  status: string;
}

export type ObjectData = { [key: string]: SourcesArray[] };

export type Callback<T> = (data: T) => void;