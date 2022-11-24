export const addDay = payload => {
    return {
        type: 'addDay',
        payload
    }
}

export const delDay = (id) => {
    return {
        type: 'delDay',
        payload: id,
    }
}