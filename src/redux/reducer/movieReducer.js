const movie = []
export const movieReducer = (state= movie, action)=>{
    console.log(state);
    switch (action.type) {
        case 'CHON_PHIM':
            let movieClick = action.phim;
            state.push(movieClick)
            console.log(state)
            // kiểm tra có tồn tại trong state chưa
            // có r thì ko push
            return [...state];
        
        default:
            return state;
    }
}
