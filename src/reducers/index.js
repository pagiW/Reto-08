const reducers = (state, action) => {
    switch (action.type) {
        case 'SET_FILTER':
            return {
                ...state,
                filters: [...state.filters, action.payload]
            }
        case 'DELETE_FILTER':
            return {
                ...state,
                filters: state.filters.filter(item => item.id !== action.payload),
            }
        default:
            return state;
    }
}

export default reducers;