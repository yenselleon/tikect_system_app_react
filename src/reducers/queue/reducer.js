import types from './types'

const initialState = {
    queues: [],
    listTicketByQueue: [],
}

const queueReducer = (state = initialState, action)=> {
    const {payload} = action;

    switch (action.type) {
        case types.getQueues:
            return {
                ...state,
                queues: payload
            }
        case types.listQueues:
            return {
                ...state,
                listTicketByQueue: [...payload]
            }
            
        default:
            return state;
    }

}

export default queueReducer;