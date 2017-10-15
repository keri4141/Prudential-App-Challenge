import { Navigation } from 'react-native-navigation';
import InformationScreen from './Information';
import ResponseOne from './responseOne';
import Preview from './preview';
export default (store, Provider) => {
Navigation.registerComponent('PrudentialHack.InformationScreen', () => InformationScreen, store, Provider);
Navigation.registerComponent('PrudentialHack.ResponseOne', () => ResponseOne, store, Provider);
Navigation.registerComponent('PrudentialHack.Preview', () => Preview, store, Provider);
}