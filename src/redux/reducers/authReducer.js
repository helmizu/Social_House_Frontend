const initialState = {
    isLoggedIn : 'true'
}

export default (state = initialState, action) => {
switch (action.type) {
    case 'LOGOUT_USER':
        return {...state, isLoggedIn: 'false'}

    default:
        return state
}
}