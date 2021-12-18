import {combineReducers} from 'redux';
import {Utils} from './utils';
import {Blog} from './blog';

const Reducers = combineReducers({
    utils: Utils,
    blog: Blog,
});

export default Reducers;
