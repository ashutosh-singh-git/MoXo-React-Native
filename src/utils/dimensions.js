import {Dimensions} from 'react-native';

const GlobalDimensions = {
    screenWidth: Dimensions.get('window').width,
    screenHeight: Dimensions.get('window').height,
};

export {GlobalDimensions};
