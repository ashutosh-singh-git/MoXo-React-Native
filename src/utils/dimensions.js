import {Dimensions} from 'react-native';

const GlobalDimensions = {
    screenWidth: Dimensions.get('screen').width,
    screenHeight: Dimensions.get('screen').height,
    windowWidth: Dimensions.get('window').width,
    windowHeight: Dimensions.get('window').height,
};

export {GlobalDimensions};
