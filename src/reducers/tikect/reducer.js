import types from './types'

const initialState = {
    ticketlist: [],
    ticketSelected: null
}

const ticketReducer = (state = initialState, action)=> {
    const {payload} = action;

    switch (action.type) {
        case types.getListTickets:
            return {
                ...state,
                ticketlist: [
                    ...payload.data
                ],
            }
            
        default:
            return state;
    }

}

export default ticketReducer;