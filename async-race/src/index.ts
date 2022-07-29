import './style.scss';
import ContainerGarage from './components/view/containerGarage/ContainerGarage';
import CarsItem from './components/view/carsItem/CarsItem';

new ContainerGarage().getPage();

new CarsItem( { 'name': 'Tesla', 'color': '#e6e6fa', 'id': 1 } );

