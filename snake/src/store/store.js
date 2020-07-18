import {createStore} from 'redux';

function reducer(state={ prepare: 'init'},action){
    switch (action.type){
        case 'init': return {prepare: 'init'};
        case 'records': return {prepare: 'records'};
        case 'levels' : return {prepare: 'levels'};
        case 'game' : return {prepare: 'game'};
        default: return state;
    }
}

const store = createStore(reducer);

export default store;