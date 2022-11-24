export const decMoney = (amount) => {
    return {
        type: 'DEC',
        payload: amount
    }
}
export const incMoney = (amount) => {
    return {
        type: 'INC',
        payload: amount
    }
}
