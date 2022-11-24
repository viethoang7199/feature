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
            let newDay = state.days;
            const objIndex = newDay.filter(obj => obj.id === action.payload.id)
            newDay.splice(objIndex, 1)
            return {
                days: [...newDay]
            }
        default:
            return state;
    }
}

export default rootReducer;