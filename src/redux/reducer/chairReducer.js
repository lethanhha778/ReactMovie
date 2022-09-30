const chair = []
export const chairReducer = (state= chair, action)=>{
    console.log(state)
    switch (action.type) {
        case 'CHON_GHE':
            state.push(action.ticket + " ")
            // ktra nếu mà state thay đổi thì render lại
            console.log(state)
            return [...state];
        default:
            return state;
    }
}
