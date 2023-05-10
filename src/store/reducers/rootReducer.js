import { combineReducers } from 'redux';
import contract from './contract';
import customer from './customer';


const rootReducer = combineReducers({
    contract,
    customer,
});

export default rootReducer;