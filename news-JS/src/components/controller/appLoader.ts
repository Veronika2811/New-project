import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: 'cb48e7a663f5485f86b60d649f9c65e3',
        });
    }
}

export default AppLoader;
