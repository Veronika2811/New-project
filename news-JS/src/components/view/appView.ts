import News from './news/news';
import Sources from './sources/sources';
import { Articles, SourcesArray, GetNews, GetSources } from '../interface/interface';

export class AppView {
    private news: News;

    private sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: Partial<GetNews>): void {
        const values: Articles[] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: Pick<GetSources, 'sources' | 'status'>): void {
        const values: SourcesArray[] = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
