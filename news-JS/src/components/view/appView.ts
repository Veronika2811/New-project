import News from './news/news';
import Sources from './sources/sources';
import { IArticles, ISources, Inews, Isource } from '../interface/interface'


export class AppView {
    news: News;

    sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: Inews) {
        const values: IArticles[] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: Isource) {
        const values: ISources[] = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
