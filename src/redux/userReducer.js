import { ISAUTH } from './UserAction';


const initialState = {
    isLogin: false
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ISAUTH:
            const value = action.value;
            console.log('from reduxer', action.value)
            return {
                ...state,
                isLogin: value
            }
        default:
            return state
    }
}