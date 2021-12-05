// import React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
// import store from './src/redux';
// import {Provider} from 'react-redux';
//
// const Index = props => {
//   return (
//     <Provider store={store}>
//       <App initialProps={props} />
//     </Provider>
//   );
// };

AppRegistry.registerComponent(appName, () => App);
