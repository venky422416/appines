
const defaultState = {
    authState: false,
    data: []
}

const reducer = (state = defaultState, action) => {
    const { type, data } = action;
    switch (type) {
        case "USER_AUTHORISED": return {
            ...state,
            authState: true,
            data: data
        };
        case "USER_UN_AUTHORISED": return {
            ...state,
            authState: false,
            data: []
        }
        default: return state;
    }
};

export default reducer;
