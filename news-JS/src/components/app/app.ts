import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    
    public controller: AppController;
    public view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(): void {
        (<HTMLDivElement>document.querySelector('.sources')).addEventListener('click', (e: Event) =>
            this.controller.getNews(e, (data) => this.view.drawNews(data))
        );
        this.controller.getSources((data) => this.view.drawSources(data));
    }
}

export default App;