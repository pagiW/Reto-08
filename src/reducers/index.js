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
                    let n3 = state.filters.length - 3;
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
                        if (state.filters.length >= 3) {
                            if (state.filters[n3].language !== '' && state.filters[n2].language !== '' && state.filters[n].isRole !== '') {
                                return data.languages.includes(state.filters[n3].language) && data.languages.includes(state.filters[n2].language) && data.role === state.filters[n].isRole;
                            } else if (state.filters[n3].tool !== '' && state.filters[n2].tool !== '' && state.filters[n].isRole !== '') {
                                return data.tools.includes(state.filters[n3].tool) && data.tools.includes(state.filters[n2].tool) && data.role === state.filters[n].isRole;
                            } else if (state.filters[n3].isLevel !== '' && state.filters[n].isRole !== '' && state.filters[n2].language !== '') {
                                return data.level === state.filters[n3].isLevel && data.role === state.filters[n].isRole && data.languages.includes(state.filters[n2].language);
                            } else if (state.filters[n2].isLevel !== '' && state.filters[n].isRole !== '' && state.filters[n3].language !== '') {
                                return data.level === state.filters[n2].isLevel && data.role === state.filters[n].isRole && data.languages.includes(state.filters[n3].language);
                            } else if (state.filters[n2].isLevel !== '' && state.filters[n3].isRole !== '' && state.filters[n].language !== '') {
                                return data.level === state.filters[n2].isLevel && data.role === state.filters[n3].isRole && data.languages.includes(state.filters[n].language);
                            } else if (state.filters[n3].isLevel !== '' && state.filters[n2].isRole !== '' && state.filters[n].language !== '') {
                                return data.level === state.filters[n3].isLevel && data.role === state.filters[n2].isRole && data.languages.includes(state.filters[n].language);
                            } else if (state.filters[n].isLevel !== '' && state.filters[n2].isRole !== '' && state.filters[n3].language !== '') {
                                return data.level === state.filters[n].isLevel && data.role === state.filters[n2].isRole && data.languages.includes(state.filters[n3].language);
                            } else if (state.filters[n].isLevel !== '' && state.filters[n3].isRole !== '' && state.filters[n2].language !== '') {
                                return data.level === state.filters[n].isLevel && data.role === state.filters[n3].isRole && data.languages.includes(state.filters[n2].language);
                            } else if (state.filters[n3].isLevel !== '' && state.filters[n].isRole !== '' && state.filters[n2].tool !== '') {
                                return data.level === state.filters[n3].isLevel && data.role === state.filters[n].isRole && data.tools.includes(state.filters[n2].tool);
                            } else if (state.filters[n2].isLevel !== '' && state.filters[n].isRole !== '' && state.filters[n3].tool !== '') {
                                return data.level === state.filters[n2].isLevel && data.role === state.filters[n].isRole && data.tools.includes(state.filters[n3].tool);
                            } else if (state.filters[n2].isLevel !== '' && state.filters[n3].isRole !== '' && state.filters[n].tool !== '') {
                                return data.level === state.filters[n2].isLevel && data.role === state.filters[n3].isRole && data.tools.includes(state.filters[n].tool);
                            } else if (state.filters[n3].isLevel !== '' && state.filters[n2].isRole !== '' && state.filters[n].tool !== '') {
                                return data.level === state.filters[n3].isLevel && data.role === state.filters[n2].isRole && data.tools.includes(state.filters[n].tool);
                            } else if (state.filters[n].isLevel !== '' && state.filters[n2].isRole !== '' && state.filters[n3].tool !== '') {
                                return data.level === state.filters[n].isLevel && data.role === state.filters[n2].isRole && data.tools.includes(state.filters[n3].tool);
                            } else if (state.filters[n].isLevel !== '' && state.filters[n3].isRole !== '' && state.filters[n2].tool !== '') {
                                return data.level === state.filters[n].isLevel && data.role === state.filters[n3].isRole && data.tools.includes(state.filters[n2].tool);
                            } else if (state.filters[n2].language !== '' && state.filters[n].language !== '' && state.filters[n3].language !== '') {
                                return data.languages.includes(state.filters[n2].language) && data.languages.includes(state.filters[n].language) && data.languages.includes(state.filters[n3].language);
                            } else if (state.filters[n3].tool !== '' && state.filters[n2].language !== '' && state.filters[n].isRole !== '') {
                                return data.tools.includes(state.filters[n3].tool) && data.languages.includes(state.filters[n2].language) && data.role === state.filters[n].isRole;
                            } else if (state.filters[n3].tool !== '' && state.filters[n2].language !== '' && state.filters[n].isLevel !== '') {
                                return data.tools.includes(state.filters[n3].tool) && data.languages.includes(state.filters[n2].language) && data.level === state.filters[n].isLevel;
                            } else if (state.filters[n2].tool !== '' && state.filters[n3].language !== '' && state.filters[n].isRole !== '') {
                                return data.tools.includes(state.filters[n2].tool) && data.languages.includes(state.filters[n3].language) && data.role === state.filters[n].isRole;
                            } else if (state.filters[n2].tool !== '' && state.filters[n3].language !== '' && state.filters[n].isLevel !== '') {
                                return data.tools.includes(state.filters[n2].tool) && data.languages.includes(state.filters[n3].language) && data.level === state.filters[n].isLevel;
                            } else if (state.filters[n].language !== '' && state.filters[n2].language !== '' && state.filters[n3].isRole !== '') {
                                return data.languages.includes(state.filters[n].language) && data.languages.includes(state.filters[n2].language) && data.role === state.filters[n3].isRole;
                            } else if (state.filters[n].language !== '' && state.filters[n3].language !== '' && state.filters[n2].isRole !== '') {
                                return data.languages.includes(state.filters[n].language) && data.languages.includes(state.filters[n3].language) && data.role === state.filters[n2].isRole;
                            } else if (state.filters[n].language !== '' && state.filters[n2].language !== '' && state.filters[n3].isLevel !== '') {
                                return data.languages.includes(state.filters[n].language) && data.languages.includes(state.filters[n2].language) && data.level === state.filters[n3].isLevel;
                            } else if (state.filters[n].language !== '' && state.filters[n3].language !== '' && state.filters[n2].isLevel !== '') {
                                return data.languages.includes(state.filters[n].language) && data.languages.includes(state.filters[n3].language) && data.level === state.filters[n2].isLevel;
                            } else if (state.filters[n].language !== '' && state.filters[n2].language !== '' && state.filters[n3].tool !== '') {
                                return data.languages.includes(state.filters[n].language) && data.languages.includes(state.filters[n2].language) && data.tools.includes(state.filters[n3].tool);
                            } else if (state.filters[n].language !== '' && state.filters[n3].language !== '' && state.filters[n2].tool !== '') {
                                return data.languages.includes(state.filters[n].language) && data.languages.includes(state.filters[n3].language) && data.tools.includes(state.filters[n2].tool);
                            } else if (state.filters[n].tool !== '' && state.filters[n2].tool !== '' && state.filters[n3].language !== '') {
                                return data.tools.includes(state.filters[n].tool) && data.tools.includes(state.filters[n2].tool) && data.languages.includes(state.filters[n3].language);
                            } else if (state.filters[n].tool !== '' && state.filters[n3].tool !== '' && state.filters[n2].language !== '') {
                                return data.tools.includes(state.filters[n].tool) && data.tools.includes(state.filters[n3].tool) && data.languages.includes(state.filters[n2].language);
                            } else if (state.filters[n2].tool !== '' && state.filters[n].language !== '' && state.filters[n3].language !== '') {
                                return data.tools.includes(state.filters[n2].tool) && data.languages.includes(state.filters[n].language) && data.languages.includes(state.filters[n3].language);
                            } else if (state.filters[n].tool !== '' && state.filters[n2].language !== '' && state.filters[n3].language !== '') {
                                return data.tools.includes(state.filters[n].tool) && data.languages.includes(state.filters[n2].language) && data.languages.includes(state.filters[n3].language);
                            } else if (state.filters[n2].language !== '' && state.filters[n].tool !== '' && state.filters[n3].tool !== '') {
                                return data.languages.includes(state.filters[n2].language) && data.tools.includes(state.filters[n].tool) && data.tools.includes(state.filters[n3].tool);
                            } else if (state.filters[n].language !== '' && state.filters[n2].tool !== '' && state.filters[n3].tool !== '') {
                                return data.languages.includes(state.filters[n].language) && data.tools.includes(state.filters[n2].tool) && data.tools.includes(state.filters[n3].tool);
                            }
                        }
                        if (state.filters[n2].language !== '' && state.filters[n].tool !== '') {
                            return data.languages.includes(state.filters[n2].language) && data.tools.includes(state.filters[n].tool);
                        } else if (state.filters[n].language !== '' && state.filters[n2].tool !== '') {
                            return data.languages.includes(state.filters[n].language) && data.tools.includes(state.filters[n2].tool);
                        } else if (state.filters[n2].language !== '' && state.filters[n].isRole !== '') {
                            return data.languages.includes(state.filters[n2].language) && data.role === state.filters[n].isRole;
                        } else if (state.filters[n].language !== '' && state.filters[n2].isRole !== '') {
                            return data.languages.includes(state.filters[n].language) && data.role === state.filters[n2].isRole;
                        } else if (state.filters[n2].tool !== '' && state.filters[n].isRole !== '') {
                            return data.tools.includes(state.filters[n2].tool) && data.role === state.filters[n].isRole;
                        } else if (state.filters[n].tool !== '' && state.filters[n2].isRole !== '') {
                            return data.tools.includes(state.filters[n].tool) && data.role === state.filters[n2].isRole;
                        } else if (state.filters[n2].language !== '' && state.filters[n].isLevel !== '') {
                            return data.languages.includes(state.filters[n2].language) && data.level === state.filters[n].isLevel;
                        } else if (state.filters[n].language !== '' && state.filters[n2].isLevel !== '') {
                            return data.languages.includes(state.filters[n].language) && data.level === state.filters[n2].isLevel;
                        } else if (state.filters[n2].tool !== '' && state.filters[n].isLevel !== '') {
                            return data.tools.includes(state.filters[n2].tool) && data.level === state.filters[n].isLevel;
                        } else if (state.filters[n].tool !== '' && state.filters[n2].isLevel !== '') {
                            return data.tools.includes(state.filters[n].tool) && data.level === state.filters[n2].isLevel;
                        } else if (state.filters[n].isRole !== '' && state.filters[n].level !== '') {
                            return data.role === state.filters[n].role && data.level === state.filters[n].level;
                        } else if (state.filters[n].role !== '' && state.filters[n].isLevel !== '') {
                            return data.role === state.filters[n].role && data.level === state.filters[n].level;
                        } else if (state.filters[n].tools.length > 1) {
                            return data.tools.includes(state.filters[n].tools[0]) && data.tools.includes(state.filters[n].tools[1]);
                        } else if (state.filters[n].languages.length > 0 && state.filters[n].tools[0] === state.filters[n].tool) {
                            if (state.filters[n].languages[0] === state.filters[0].language && state.filters[n].languages[2] === state.filters[n2].language) {
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
                            if (state.filters[n].languages[0] === state.filters[0].language && state.filters[n].languages[2] === state.filters[n2].language) {
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
                            if (state.filters[n].languages[0] === state.filters[n2].language && state.filters[n].languages[2] === state.filters[n].language) {
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
                            if (state.filters[n].languages[0] === state.filters[n2].language && state.filters[n].languages[2] === state.filters[n].language) {
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
                        } else if (state.filters[n].languages.length > 0 && state.filters[n].role === state.filters[n].isRole) {
                            if (state.filters[n].languages[0] === state.filters[0].language && state.filters[n].languages[2] === state.filters[n2].language) {
                                return data.languages.includes(state.filters[n].languages[0]) && data.languages.includes(state.filters[n].languages[2]) && data.role === state.filters[n].role;
                            } else if (state.filters[n].languages[1] === state.filters[0].language && state.filters[n].languages[2] === state.filters[n2].language) {
                                return data.languages.includes(state.filters[n].languages[1]) && data.languages.includes(state.filters[n].languages[2]) && data.role === state.filters[n].role;
                            } else if (state.filters[n].languages[0] === state.filters[0].language && state.filters[n].languages[1] === state.filters[n2].language) {
                                return data.languages.includes(state.filters[n].languages[0]) && data.languages.includes(state.filters[n].languages[1]) && data.role === state.filters[n].role;
                            } else if (state.filters[n].languages[1] === state.filters[0].language && state.filters[n].languages[0] === state.filters[n2].language) {
                                return data.languages.includes(state.filters[n].languages[0]) && data.languages.includes(state.filters[n].languages[1]) && data.role === state.filters[n].role;
                            } else if (state.filters[n].languages[2] === state.filters[0].language && state.filters[n].languages[1] === state.filters[n2].language) {
                                return data.languages.includes(state.filters[n].languages[2]) && data.languages.includes(state.filters[n].languages[1]) && data.role === state.filters[n].role;
                            } else if (state.filters[n].languages[2] === state.filters[0].language && state.filters[n].languages[0] === state.filters[n2].language) {
                                return data.languages.includes(state.filters[n].languages[2]) && data.languages.includes(state.filters[n].languages[0]) && data.role === state.filters[n].role;
                            }
                        } else if (state.filters[n].languages.length > 0 && state.filters[n].role === state.filters[0].isRole) {
                            if (state.filters[n].languages[0] === state.filters[n2].language && state.filters[n].languages[2] === state.filters[n].language) {
                                return data.languages.includes(state.filters[n].languages[0]) && data.languages.includes(state.filters[n].languages[2]) && data.role === state.filters[n].role;
                            } else if (state.filters[n].languages[1] === state.filters[n2].language && state.filters[n].languages[2] === state.filters[n].language) {
                                return data.languages.includes(state.filters[n].languages[1]) && data.languages.includes(state.filters[n].languages[2]) && data.role === state.filters[n].role;
                            } else if (state.filters[n].languages[0] === state.filters[n2].language && state.filters[n].languages[1] === state.filters[n].language) {
                                return data.languages.includes(state.filters[n].languages[0]) && data.languages.includes(state.filters[n].languages[1]) && data.role === state.filters[n].role;
                            } else if (state.filters[n].languages[1] === state.filters[n2].language && state.filters[n].languages[0] === state.filters[n].language) {
                                return data.languages.includes(state.filters[n].languages[0]) && data.languages.includes(state.filters[n].languages[1]) && data.role === state.filters[n].role;
                            } else if (state.filters[n].languages[2] === state.filters[n2].language && state.filters[n].languages[1] === state.filters[n].language) {
                                return data.languages.includes(state.filters[n].languages[2]) && data.languages.includes(state.filters[n].languages[1]) && data.role === state.filters[n].role;
                            } else if (state.filters[n].languages[2] === state.filters[n2].language && state.filters[n].languages[0] === state.filters[n].language) {
                                return data.languages.includes(state.filters[n].languages[2]) && data.languages.includes(state.filters[n].languages[0]) && data.role === state.filters[n].role;
                            }
                        } else if (state.filters[n].languages.length > 0 && state.filters[n].level === state.filters[n].isLevel) {
                            if (state.filters[n].languages[0] === state.filters[0].language && state.filters[n].languages[2] === state.filters[n2].language) {
                                return data.languages.includes(state.filters[n].languages[0]) && data.languages.includes(state.filters[n].languages[2]) && data.level === state.filters[n].level;
                            } else if (state.filters[n].languages[1] === state.filters[0].language && state.filters[n].languages[2] === state.filters[n2].language) {
                                return data.languages.includes(state.filters[n].languages[1]) && data.languages.includes(state.filters[n].languages[2]) && data.level === state.filters[n].level;
                            } else if (state.filters[n].languages[0] === state.filters[0].language && state.filters[n].languages[1] === state.filters[n2].language) {
                                return data.languages.includes(state.filters[n].languages[0]) && data.languages.includes(state.filters[n].languages[1]) && data.level === state.filters[n].level;
                            } else if (state.filters[n].languages[1] === state.filters[0].language && state.filters[n].languages[0] === state.filters[n2].language) {
                                return data.languages.includes(state.filters[n].languages[0]) && data.languages.includes(state.filters[n].languages[1]) && data.level === state.filters[n].level;
                            } else if (state.filters[n].languages[2] === state.filters[0].language && state.filters[n].languages[1] === state.filters[n2].language) {
                                return data.languages.includes(state.filters[n].languages[2]) && data.languages.includes(state.filters[n].languages[1]) && data.level === state.filters[n].level;
                            } else if (state.filters[n].languages[2] === state.filters[0].language && state.filters[n].languages[0] === state.filters[n2].language) {
                                return data.languages.includes(state.filters[n].languages[2]) && data.languages.includes(state.filters[n].languages[0]) && data.level === state.filters[n].level;
                            }
                        } else if (state.filters[n].languages.length > 0 && state.filters[n].level === state.filters[0].isLevel) {
                            if (state.filters[n].languages[0] === state.filters[n2].language && state.filters[n].languages[2] === state.filters[n].language) {
                                return data.languages.includes(state.filters[n].languages[0]) && data.languages.includes(state.filters[n].languages[2]) && data.level === state.filters[n].level;
                            } else if (state.filters[n].languages[1] === state.filters[n2].language && state.filters[n].languages[2] === state.filters[n].language) {
                                return data.languages.includes(state.filters[n].languages[1]) && data.languages.includes(state.filters[n].languages[2]) && data.level === state.filters[n].level;
                            } else if (state.filters[n].languages[0] === state.filters[n2].language && state.filters[n].languages[1] === state.filters[n].language) {
                                return data.languages.includes(state.filters[n].languages[0]) && data.languages.includes(state.filters[n].languages[1]) && data.level === state.filters[n].level;
                            } else if (state.filters[n].languages[1] === state.filters[n2].language && state.filters[n].languages[0] === state.filters[n].language) {
                                return data.languages.includes(state.filters[n].languages[0]) && data.languages.includes(state.filters[n].languages[1]) && data.level === state.filters[n].level;
                            } else if (state.filters[n].languages[2] === state.filters[n2].language && state.filters[n].languages[1] === state.filters[n].language) {
                                return data.languages.includes(state.filters[n].languages[2]) && data.languages.includes(state.filters[n].languages[1]) && data.level === state.filters[n].level;
                            } else if (state.filters[n].languages[2] === state.filters[n2].language && state.filters[n].languages[0] === state.filters[n].language) {
                                return data.languages.includes(state.filters[n].languages[2]) && data.languages.includes(state.filters[n].languages[0]) && data.level === state.filters[n].level;
                            }
                        } else if (state.filters[n].languages.length > 1) {
                            if (state.filters[n].languages[0] === state.filters[n2].language && state.filters[n].languages[2] === state.filters[n].language && state.filters[n].languages[1] === state.filters[0].language) {
                                return data.languages.includes(state.filters[n].languages[0]) && data.languages.includes(state.filters[n].languages[2]) && data.languages.includes(state.filters[n].languages[1]);
                            } else if (state.filters[n].languages[1] === state.filters[n2].language && state.filters[n].languages[2] === state.filters[n].language && state.filters[n].languages[0] === state.filters[0].language) {
                                return data.languages.includes(state.filters[n].languages[1]) && data.languages.includes(state.filters[n].languages[2]) && data.languages.includes(state.filters[n].languages[0]);
                            } else if (state.filters[n].languages[0] === state.filters[n2].language && state.filters[n].languages[1] === state.filters[n].language && state.filters[n].languages[2] === state.filters[0].language) {
                                return data.languages.includes(state.filters[n].languages[0]) && data.languages.includes(state.filters[n].languages[1]) && data.languages.includes(state.filters[n].languages[2]);
                            } else if (state.filters[n].languages[1] === state.filters[n2].language && state.filters[n].languages[0] === state.filters[n].language && state.filters[n].languages[2] === state.filters[0].language) {
                                return data.languages.includes(state.filters[n].languages[0]) && data.languages.includes(state.filters[n].languages[1]) && data.languages.includes(state.filters[n].languages[2]);
                            } else if (state.filters[n].languages[2] === state.filters[n2].language && state.filters[n].languages[1] === state.filters[n].language && state.filters[n].languages[0] === state.filters[0].language) {
                                return data.languages.includes(state.filters[n].languages[2]) && data.languages.includes(state.filters[n].languages[1]) && data.languages.includes(state.filters[n].languages[0]);
                            } else if (state.filters[n].languages[2] === state.filters[n2].language && state.filters[n].languages[0] === state.filters[n].language && state.filters[n].languages[1] === state.filters[0].language) {
                                return data.languages.includes(state.filters[n].languages[2]) && data.languages.includes(state.filters[n].languages[0]) && data.languages.includes(state.filters[n].languages[1]);
                            } else if (state.filters[n].languages[0] === state.filters[n2].language && state.filters[n].languages[2] === state.filters[n].language) {
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