
import React, { Component } from 'react';
import {
 Platform,
 AppRegistry
} from 'react-native';

import { Navigation } from 'react-native-navigation';
import {createStore, applyMiddleware, combineReducers} from "redux";
import {Provider} from "react-redux";
import registerScreens from './components/screens/screens.js';
import thunk from "redux-thunk";
import * as reducers from "./reducers/index";
import * as appActions from "./actions/index";
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

registerScreens(store, Provider);

const licenseKey = Platform.select({
    // iOS license key for applicationID: org.reactjs.native.example.BlinkIDReactNative
    ios: 'YGWP2SLM-IS65QYMK-4XAB2VSM-PDIFWFQY-QXZ262QK-L2L62G6D-Z7LAXJ6O-HBDCKLRW',
    // android license key for applicationID: com.blinkidreactnative
    android: 'VF2QEAKE-IZYWGJZJ-6T43WTEY-VTKDF37N-HBPMOOC6-Y44F5RZY-L3DTQXWH-HBPLB7DZ'
})

var renderIf = function(condition, content) {
    if (condition) {
        return content;
    } 
    return null;
  }


export default class App extends Component {

    constructor(props) {
        super(props);
        
        this.startApp();
      }
    
    startApp() {
    Navigation.startSingleScreenApp({
        screen: {
        screen: 'PrudentialHack.InformationScreen', // unique ID registered with Navigation.registerScreen
        title: 'Welcome', // title of the screen as appears in the nav bar (optional)
        navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
        navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
        },
    });
    }

    
}