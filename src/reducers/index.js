import {changeTheNumber} from './upDown';
import { toggleName } from './toggleName';

import { combineReducers } from 'redux';

const rootReducer=combineReducers({
    changeTheNumber,
    toggleName,
})

export default rootReducer;