export const setFilter = payload => ({
    type: 'SET_FILTER',
    payload,
});

export const delteFilter = payload => ({
    type: 'DELETE_FILTER',
    payload,
});

export const delte = () => ({
    type: 'DELETE',
});
export const setFiltered = () => ({
    type: 'SET_FILTERED',
});