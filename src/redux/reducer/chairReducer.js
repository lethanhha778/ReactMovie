const chair = []
export const chairReducer = (state = chair, action) => {
    switch (action.type) {
        case 'CHON_GHE':
            let chairFind = state.find((sp) => {
                return sp.soGhe === action.ticket.soGhe
            });
            console.log(chairFind);
            if (chairFind ) {
                let indexChair = state.indexOf(chairFind)
                console.log(indexChair);
                state.slice(indexChair, 1)
                
                console.log(state)
                // ko xóa đc khỏi mảng state
            }
            else {
                let spGH = action.ticket;
                state.push(spGH)
            }
            console.log(state)
            return [...state];
        default:
            return state;
    }
}

