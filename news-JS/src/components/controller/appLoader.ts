import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: '6476e5a3c8e94a3cbd13c018b8fc48e7',
        });
    }
}

export default AppLoader;
