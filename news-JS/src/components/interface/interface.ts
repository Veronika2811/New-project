export interface IArticles {
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
  name: string;
  id: string;
}

export interface ISources {
  category: string;
  country: string;
  description: string;
  id: string;
  language: string;
  name: string;
  url: string;
}

export interface Inews {
  articles: [];
  status: string;
  totalResults: number;
}

export interface Isource {
  sources: ISources[];
  status: string;
}

export type ObjectData = { [key: string]: ISources[] };