// import React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import Reducers from './src/redux/reducers';
import thunk from 'redux-thunk';


// const store = createStore(
//     Reducers,
//     applyMiddleware(thunk)
// );
//
//
// const Index = props => {
//   return (
//     <Provider store={store}>
//       <App initialProps={props} />
//     </Provider>
//   );
// };

AppRegistry.registerComponent(appName, () => App);
