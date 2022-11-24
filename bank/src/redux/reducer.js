const rootReducer = (state, action) => {
    switch (action.type) {
        case 'DEC':
            return {
                ...state,
                totalMoney: state.totalMoney - action.payload,
            };
        case 'INC':
            return {
                ...state,
                totalMoney: state.totalMoney + action.payload,
            };

        default:
            return state;
    }

}

export default rootReducer;