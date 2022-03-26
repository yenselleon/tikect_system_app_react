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
                ticketlist: payload,
            }
        case types.selectedTicket:
            return {
                ...state,
                ticketSelected: payload,
            }
        case types.deseleccionarTicket:
            return {
                ...state,
                ticketSelected: null,
            }
            
        default:
            return state;
    }

}

export default ticketReducer;