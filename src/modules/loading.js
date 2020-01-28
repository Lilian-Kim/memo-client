import {createAction, handleActions} from 'redux-ations'


const START_LOADING  = 'loading/START_LOADING'
const FINISH_LOADING = 'loading/FINISH_LOADING'

export const startLoading = createAction(
    START_LOADING,
    requestType => requestType,
)

export const finishLoading = createAction(
    FINISH_LOADING,
    requestType => requestType,
)

const initialState = {}

const loading = handleActions({
    [START_LOADING]: (state, action) => ({
        ...state,
        [action.payload]: true,
    }),
    [FINISH_LOADING]: (state, action) => ({
        ...state,
        [action.payload]: true,
    }),
},
initialState,
)

export default loading
