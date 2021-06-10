import number from './number';
import color from './color';

import { combineReducers } from 'redux';

//서브 리듀서들을 하나로 합친다.

const reducers = combineReducers({
    numberData: number,
    colorData: color
});

export default reducers;