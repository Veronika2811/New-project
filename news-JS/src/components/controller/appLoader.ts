import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: 'cfcf4bccd9264f96a9983de012f7cbea',
        });
    }
}

export default AppLoader;
