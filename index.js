import React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import Reducers from './src/redux/reducers';
import thunk from 'redux-thunk';

const store = createStore(
    Reducers,
    {},
    applyMiddleware(thunk),
);

const Index = () => {
    return (
        <StoreProvider store={store}>
            <PaperProvider>
                <App/>
            </PaperProvider>
        </StoreProvider>
    );
};

AppRegistry.registerComponent(appName, () => Index);
