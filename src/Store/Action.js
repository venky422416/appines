

export const authorised = ( data) => ({
    type: "USER_AUTHORISED",
    data
});

export const unAuthorised = () => ({
    type: "USER_UN_AUTHORISED"
});