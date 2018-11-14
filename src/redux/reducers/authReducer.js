const initialState = {
    isLoggedIn : false
}

export default (state = initialState, action) => {
switch (action.type) {
    case 'LOGOUT_USER':
        return {...state, isLoggedIn: true}

    default:
        return state
}
}