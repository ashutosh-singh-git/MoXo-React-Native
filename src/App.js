import React, {useEffect, useState} from 'react';
import RootNavigation from './navigation';
import {useDispatch} from 'react-redux';
import {setConstants, setIsOnline} from './redux/actions';
import {CONSTANTS} from './utils';
import NetInfo from "@react-native-community/netinfo";

function App() {
    const dispatch = useDispatch();
    const Constant = CONSTANTS();
    const [isInternetReachable, setIsInternetReachable] = useState(false)

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener((state) => {
            if(state.isConnected && isInternetReachable !== state.isInternetReachable){
                setIsInternetReachable(state.isInternetReachable);
            }
        });
        dispatch(setConstants(Constant));
        dispatch(setIsOnline(isInternetReachable));
        return () => {
            unsubscribe();
        };
    }, [Constant,isInternetReachable]);



    return <RootNavigation/>;
}

export default App;
