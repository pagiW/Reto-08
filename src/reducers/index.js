const reducers = (state, action) => {
    switch (action.type) {
        case 'SET_FILTER':
            const exist = state.filters.find(item => item.tool === action.payload.tool && item.language === action.payload.language && item.isRole === action.payload.isRole && item.isLevel === action.payload.isLevel);
            if (exist) {
                return {...state}
            } else {
                return {
                    ...state,
                    filters: [...state.filters, action.payload],
                }
            }
        case 'DELETE_FILTER':
            return {
                ...state,
                filters: state.filters.filter(item => item.tool !== action.payload.tool && item.isRole !== action.payload.isRole && item.language !== action.payload.language && item.isLevel !== action.payload.isLevel),
            }
        case 'DELETE':
            return {
                ...state,
                filters: []
            }
        case 'SET_FILTERED':
            return {
                ...state,
                filtereds: state.datas.filter(data => {
                    let n = state.filters.length - 1;
                    let n2 = state.filters.length - 2;
                    if (state.filters.length === 1) {
                        if (state.filters[n].isRole !== '') {
                            return data.role === state.filters[n].role;
                        } else if (state.filters[n].isLevel !== '') {
                            return data.level === state.filters[n].level;
                        } else if (state.filters[n].tool !== '') {
                            return data.tools.includes(state.filters[n].tool);
                        } else if (state.filters[n].language !== '') {
                            return data.languages.includes(state.filters[n].language);
                        }
                    } else if (state.filters.length > 1) {
                        if (state.filters[n].isRole !== '' && state.filters[n].level !== '') {
                            return data.role === state.filters[n].role && data.level === state.filters[n].level;
                        } else if (state.filters[n].role !== '' && state.filters[n].isLevel !== '') {
                            return data.role === state.filters[n].role && data.level === state.filters[n].level;
                        } else if (state.filters[n].tools.length > 1) {
                            return data.tools.includes(state.filters[n].tools[0]) && data.tools.includes(state.filters[n].tools[1]);
                        } else if (state.filters[n].languages.length > 0 && state.filters[n].tools[0] === state.filters[n].tool) {
                            if (state.filters[n].languages[2] !== state.filters[n2].language && state.filters[n].languages[1] !== state.filters[n2].language && state.filters[n].languages[0] === state.filters[0].language) {
                                return data.languages.includes(state.filters[n].languages[0]) && data.tools.includes(state.filters[n].tools[0]);
                            } else if (state.filters[n].languages[2] !== state.filters[n2].language && state.filters[n].languages[1] === state.filters[0].language && state.filters[n].languages[0] !== state.filters[n2].language) {
                                return data.languages.includes(state.filters[n].languages[1]) && data.tools.includes(state.filters[n].tools[0]);
                            } else if (state.filters[n].languages[2] === state.filters[0].language && state.filters[n].languages[1] !== state.filters[n2].language && state.filters[n].languages[0] !== state.filters[n2].language) {
                                return data.languages.includes(state.filters[n].languages[2]) && data.tools.includes(state.filters[n].tools[0]);
                            } else if (state.filters[n].languages[0] === state.filters[0].language && state.filters[n].languages[2] === state.filters[n2].language) {
                                return data.languages.includes(state.filters[n].languages[0]) && data.languages.includes(state.filters[n].languages[2]) && data.tools.includes(state.filters[n].tools[0]);
                            } else if (state.filters[n].languages[1] === state.filters[0].language && state.filters[n].languages[2] === state.filters[n2].language) {
                                return data.languages.includes(state.filters[n].languages[1]) && data.languages.includes(state.filters[n].languages[2]) && data.tools.includes(state.filters[n].tools[0]);
                            } else if (state.filters[n].languages[0] === state.filters[0].language && state.filters[n].languages[1] === state.filters[n2].language) {
                                return data.languages.includes(state.filters[n].languages[0]) && data.languages.includes(state.filters[n].languages[1]) && data.tools.includes(state.filters[n].tools[0]);
                            } else if (state.filters[n].languages[1] === state.filters[0].language && state.filters[n].languages[0] === state.filters[n2].language) {
                                return data.languages.includes(state.filters[n].languages[0]) && data.languages.includes(state.filters[n].languages[1]) && data.tools.includes(state.filters[n].tools[0]);
                            } else if (state.filters[n].languages[2] === state.filters[0].language && state.filters[n].languages[1] === state.filters[n2].language) {
                                return data.languages.includes(state.filters[n].languages[2]) && data.languages.includes(state.filters[n].languages[1]) && data.tools.includes(state.filters[n].tools[0]);
                            } else if (state.filters[n].languages[2] === state.filters[0].language && state.filters[n].languages[0] === state.filters[n2].language) {
                                return data.languages.includes(state.filters[n].languages[2]) && data.languages.includes(state.filters[n].languages[0]) && data.tools.includes(state.filters[n].tools[0]);
                            }
                        } else if (state.filters[n].languages.length > 0 && state.filters[n].tools[1] === state.filters[n].tool) {
                            if (state.filters[n].languages[2] !== state.filters[n2].language && state.filters[n].languages[1] !== state.filters[n2].language && state.filters[n].languages[0] === state.filters[0].language) {
                                return data.languages.includes(state.filters[n].languages[0]) && data.tools.includes(state.filters[n].tools[1]);
                            } else if (state.filters[n].languages[2] !== state.filters[n2].language && state.filters[n].languages[1] === state.filters[0].language && state.filters[n].languages[0] !== state.filters[n2].language) {
                                return data.languages.includes(state.filters[n].languages[1]) && data.tools.includes(state.filters[n].tools[1]);
                            } else if (state.filters[n].languages[2] === state.filters[0].language && state.filters[n].languages[1] !== state.filters[n2].language && state.filters[n].languages[0] !== state.filters[n2].language) {
                                return data.languages.includes(state.filters[n].languages[2]) && data.tools.includes(state.filters[n].tools[1]);
                            } else if (state.filters[n].languages[0] === state.filters[0].language && state.filters[n].languages[2] === state.filters[n2].language) {
                                return data.languages.includes(state.filters[n].languages[0]) && data.languages.includes(state.filters[n].languages[2]) && data.tools.includes(state.filters[n].tools[1]);
                            } else if (state.filters[n].languages[1] === state.filters[0].language && state.filters[n].languages[2] === state.filters[n2].language) {
                                return data.languages.includes(state.filters[n].languages[1]) && data.languages.includes(state.filters[n].languages[2]) && data.tools.includes(state.filters[n].tools[1]);
                            } else if (state.filters[n].languages[0] === state.filters[0].language && state.filters[n].languages[1] === state.filters[n2].language) {
                                return data.languages.includes(state.filters[n].languages[0]) && data.languages.includes(state.filters[n].languages[1]) && data.tools.includes(state.filters[n].tools[1]);
                            } else if (state.filters[n].languages[1] === state.filters[0].language && state.filters[n].languages[0] === state.filters[n2].language) {
                                return data.languages.includes(state.filters[n].languages[0]) && data.languages.includes(state.filters[n].languages[1]) && data.tools.includes(state.filters[n].tools[1]);
                            } else if (state.filters[n].languages[2] === state.filters[0].language && state.filters[n].languages[1] === state.filters[n2].language) {
                                return data.languages.includes(state.filters[n].languages[2]) && data.languages.includes(state.filters[n].languages[1]) && data.tools.includes(state.filters[n].tools[1]);
                            } else if (state.filters[n].languages[2] === state.filters[0].language && state.filters[n].languages[0] === state.filters[n2].language) {
                                return data.languages.includes(state.filters[n].languages[2]) && data.languages.includes(state.filters[n].languages[0]) && data.tools.includes(state.filters[n].tools[1]);
                            }
                        } else if (state.filters[n].languages.length > 0 && state.filters[n].tools[0] === state.filters[0].tool) {
                            if (state.filters[n].languages[2] !== state.filters[n2].language && state.filters[n].languages[1] !== state.filters[n2].language && state.filters[n].languages[0] === state.filters[n].language) {
                                return data.languages.includes(state.filters[n].languages[0]) && data.tools.includes(state.filters[n].tools[0]);
                            } else if (state.filters[n].languages[2] !== state.filters[n2].language && state.filters[n].languages[1] === state.filters[n].language && state.filters[n].languages[0] !== state.filters[n2].language) {
                                return data.languages.includes(state.filters[n].languages[1]) && data.tools.includes(state.filters[n].tools[0]);
                            } else if (state.filters[n].languages[2] === state.filters[n].language && state.filters[n].languages[1] !== state.filters[n2].language && state.filters[n].languages[0] !== state.filters[n2].language) {
                                return data.languages.includes(state.filters[n].languages[2]) && data.tools.includes(state.filters[n].tools[0]);
                            } else if (state.filters[n].languages[0] === state.filters[n2].language && state.filters[n].languages[2] === state.filters[n].language) {
                                return data.languages.includes(state.filters[n].languages[0]) && data.languages.includes(state.filters[n].languages[2]) && data.tools.includes(state.filters[n].tools[0]);
                            } else if (state.filters[n].languages[1] === state.filters[n2].language && state.filters[n].languages[2] === state.filters[n].language) {
                                return data.languages.includes(state.filters[n].languages[1]) && data.languages.includes(state.filters[n].languages[2]) && data.tools.includes(state.filters[n].tools[0]);
                            } else if (state.filters[n].languages[0] === state.filters[n2].language && state.filters[n].languages[1] === state.filters[n].language) {
                                return data.languages.includes(state.filters[n].languages[0]) && data.languages.includes(state.filters[n].languages[1]) && data.tools.includes(state.filters[n].tools[0]);
                            } else if (state.filters[n].languages[1] === state.filters[n2].language && state.filters[n].languages[0] === state.filters[n].language) {
                                return data.languages.includes(state.filters[n].languages[0]) && data.languages.includes(state.filters[n].languages[1]) && data.tools.includes(state.filters[n].tools[0]);
                            } else if (state.filters[n].languages[2] === state.filters[n2].language && state.filters[n].languages[1] === state.filters[n].language) {
                                return data.languages.includes(state.filters[n].languages[2]) && data.languages.includes(state.filters[n].languages[1]) && data.tools.includes(state.filters[n].tools[0]);
                            } else if (state.filters[n].languages[2] === state.filters[n2].language && state.filters[n].languages[0] === state.filters[n].language) {
                                return data.languages.includes(state.filters[n].languages[2]) && data.languages.includes(state.filters[n].languages[0]) && data.tools.includes(state.filters[n].tools[0]);
                            }
                        } else if (state.filters[n].languages.length > 0 && state.filters[n].tools[1] === state.filters[0].tool) {
                            if (state.filters[n].languages[2] !== state.filters[n2].language && state.filters[n].languages[1] !== state.filters[n2].language && state.filters[n].languages[0] === state.filters[n].language) {
                                return data.languages.includes(state.filters[n].languages[0]) && data.tools.includes(state.filters[n].tools[1]);
                            } else if (state.filters[n].languages[2] !== state.filters[n2].language && state.filters[n].languages[1] === state.filters[n].language && state.filters[n].languages[0] !== state.filters[n2].language) {
                                return data.languages.includes(state.filters[n].languages[1]) && data.tools.includes(state.filters[n].tools[1]);
                            } else if (state.filters[n].languages[2] === state.filters[n].language && state.filters[n].languages[1] !== state.filters[n2].language && state.filters[n].languages[0] !== state.filters[n2].language) {
                                return data.languages.includes(state.filters[n].languages[2]) && data.tools.includes(state.filters[n].tools[1]);
                            } else if (state.filters[n].languages[0] === state.filters[n2].language && state.filters[n].languages[2] === state.filters[n].language) {
                                return data.languages.includes(state.filters[n].languages[0]) && data.languages.includes(state.filters[n].languages[2]) && data.tools.includes(state.filters[n].tools[1]);
                            } else if (state.filters[n].languages[1] === state.filters[n2].language && state.filters[n].languages[2] === state.filters[n].language) {
                                return data.languages.includes(state.filters[n].languages[1]) && data.languages.includes(state.filters[n].languages[2]) && data.tools.includes(state.filters[n].tools[1]);
                            } else if (state.filters[n].languages[0] === state.filters[n2].language && state.filters[n].languages[1] === state.filters[n].language) {
                                return data.languages.includes(state.filters[n].languages[0]) && data.languages.includes(state.filters[n].languages[1]) && data.tools.includes(state.filters[n].tools[1]);
                            } else if (state.filters[n].languages[1] === state.filters[n2].language && state.filters[n].languages[0] === state.filters[n].language) {
                                return data.languages.includes(state.filters[n].languages[0]) && data.languages.includes(state.filters[n].languages[1]) && data.tools.includes(state.filters[n].tools[1]);
                            } else if (state.filters[n].languages[2] === state.filters[n2].language && state.filters[n].languages[1] === state.filters[n].language) {
                                return data.languages.includes(state.filters[n].languages[2]) && data.languages.includes(state.filters[n].languages[1]) && data.tools.includes(state.filters[n].tools[1]);
                            } else if (state.filters[n].languages[2] === state.filters[n2].language && state.filters[n].languages[0] === state.filters[n].language) {
                                return data.languages.includes(state.filters[n].languages[2]) && data.languages.includes(state.filters[n].languages[0]) && data.tools.includes(state.filters[n].tools[1]);
                            }
                        } else if (state.filters[n].languages.length > 1) {
                            if (state.filters[n].languages[0] === state.filters[n2].language && state.filters[n].languages[2] === state.filters[n].language) {
                                return data.languages.includes(state.filters[n].languages[0]) && data.languages.includes(state.filters[n].languages[2]);
                            } else if (state.filters[n].languages[1] === state.filters[n2].language && state.filters[n].languages[2] === state.filters[n].language) {
                                return data.languages.includes(state.filters[n].languages[1]) && data.languages.includes(state.filters[n].languages[2]);
                            } else if (state.filters[n].languages[0] === state.filters[n2].language && state.filters[n].languages[1] === state.filters[n].language) {
                                return data.languages.includes(state.filters[n].languages[0]) && data.languages.includes(state.filters[n].languages[1]);
                            } else if (state.filters[n].languages[1] === state.filters[n2].language && state.filters[n].languages[0] === state.filters[n].language) {
                                return data.languages.includes(state.filters[n].languages[0]) && data.languages.includes(state.filters[n].languages[1]);
                            } else if (state.filters[n].languages[2] === state.filters[n2].language && state.filters[n].languages[1] === state.filters[n].language) {
                                return data.languages.includes(state.filters[n].languages[2]) && data.languages.includes(state.filters[n].languages[1]);
                            } else if (state.filters[n].languages[2] === state.filters[n2].language && state.filters[n].languages[0] === state.filters[n].language) {
                                return data.languages.includes(state.filters[n].languages[2]) && data.languages.includes(state.filters[n].languages[0]);
                            }
                        }
                    }
                }),
            }
        default:
            return state;
    }
}

export default reducers;