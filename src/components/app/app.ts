import AppController from '../controller/controller';
import AppView from '../view/appView';
import { ArticlesT, HeadlinesT } from '../../types/types';


class App {
    private controller: AppController;
    private view: AppView;

    public constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start(): void {
        const sourcesElement = document.querySelector('.sources')

        if (sourcesElement) {
            sourcesElement.addEventListener('click', (e: Event) => {
                this.controller.getNews(e, (data: ArticlesT) => this.view.drawNews(data))
            });
            this.controller.getSources((data: HeadlinesT) => {
                this.view.drawSources(data)
            });
        }
    }
}

export default App;
