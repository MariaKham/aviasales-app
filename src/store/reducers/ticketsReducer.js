const defaultTicketsState = {
  showTickets: 5,
  tickets: [],
  stop: false,
  error: false,
}

const ticketsReducer = (state = defaultTicketsState, action) => {
  switch (action.type) {
    case 'SET_TICKETS':
      return { ...state, tickets: action.tickets }
    case 'SHOW_MORE_CLICK':
      const newShowTickets = state.showTickets + 5
      return { ...state, showTickets: newShowTickets }
    case 'SET_ERROR':
      return { ...state, error: action.payload }
    case 'SET_STOP':
      return { ...state, stop: action.payload }
    default:
      return state
  }
}

export default ticketsReducer
