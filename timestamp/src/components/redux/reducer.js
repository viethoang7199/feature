const initState = {
    days: []
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'addDay':
            return {
                ...state,
                days: [...state.days, action.payload]
            }
        case 'delDay':
            return {
                days: [...state.days]
            }
        default:
            return state;
    }
}

export default rootReducer;