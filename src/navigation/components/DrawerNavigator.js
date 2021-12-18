import React from 'react';
import {TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const HamburgerNavigation = (navigation) => (
    <TouchableOpacity
        onPress={() => {
            // navigation.openDrawer();
            console.log('Hamburger Navigation');
        }}
        style={{paddingLeft: 10}}>
        <FontAwesome
            name={'navicon'}
            size={28}
            color={'white'}
        />
    </TouchableOpacity>
);

// const Drawer = createDrawerNavigator();
//
// function DrawerNavigator() {
//     return(
//         <Drawer.Navigator initialRouteName="Home">
//             <Drawer.Screen name="Home" component={Home} />
//             <Drawer.Screen name="Second" component={Second} />
//         </Drawer.Navigator>
//     );
// }
//
// export default DrawerNavigator;

