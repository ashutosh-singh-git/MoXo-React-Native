import React, {useEffect} from 'react';
import RootNavigation from './navigation';
import {useDispatch} from 'react-redux';
import {setConstants} from './redux/actions';
import {CONSTANTS} from './utils';

function App() {
    const dispatch = useDispatch();
    const Constant = CONSTANTS();

    useEffect(() => {
        dispatch(setConstants(Constant));
    }, [Constant]);

    return <RootNavigation/>;
}

export default App;
