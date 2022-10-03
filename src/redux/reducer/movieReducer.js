const chair = {
  chairLists:[
  ]
}
export const movieReducer = (state = chair, action) => {
    switch (action.type) {
      case 'BOOK_TICKET': 
        let listChairClick = [...state.chairLists]
        let index = listChairClick.findIndex(chairClick => chairClick.soGhe === action.ticketMovie.soGhe);
        if (index !== -1) {
            listChairClick.splice(index, 1)
        } else {
            listChairClick.push(action.ticketMovie)
        }
        state.chairLists = listChairClick;
        return { ...state }
        case 'RS_STATE':
            state.chairLists = []
            return { ...state }
        default:
            return {...state} 
    }
}


