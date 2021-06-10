//action 객체를 만드는 액션 생성자들을 선언한다.

import * as types from './ActionTypes';

export const increment = () => ({
    type: types.INCREMENT
});

export const decrement = () => ({
    type: types.DECREMENT
});


//다른 액션 생성자들과 달리, 파라미터를 갖고있다.
export const setColor = (color) => ({
    type: types.SET_COLOR,
    color
});