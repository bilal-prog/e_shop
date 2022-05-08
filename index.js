/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React from 'react';

import { Provider } from "react-redux";
//import { store, persistor } from "./redux/store";
//import { store, persistor } from './store.configureStore'
import  configureStore  from "./store";

import { useSelector, useDispatch } from 'react-redux';

import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { addProduct } from "./action";



const RNRedux = () =>(
    <Provider store={configureStore().store}>
        <PersistGate persistor={configureStore().persist}>
           <App/>
        </PersistGate>    

    </Provider>
)


AppRegistry.registerComponent(appName, () => RNRedux);

