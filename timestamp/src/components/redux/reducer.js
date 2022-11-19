const initState = {
    days: [
        { id: 1, content: 'ahihi', day: '12/12/2022' },
        { id: 2, content: 'ahaha', day: '13/12/2022' },
        { id: 3, content: 'ahehe', day: '14/12/2022' },
    ]
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'addDay':
            return {
                ...state,
                days: [
                    ...state.days,
                    action.payload
                ]
            }
        default:
            break;
    }
}

export default rootReducer;