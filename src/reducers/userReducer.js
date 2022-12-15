const SET_USER = "SET_USER"
const LOGOUT = "LOGOUT"
const SET_CART = "SET_CART"


const defaultState = {
    currentUser: {},
    isAuth: false,
    userCart: []

}

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                currentUser: action.payload.user,
                isAuth: true
            }
        case SET_CART:
            return {
                ...state,
                userCart: action.payload
            }
        case LOGOUT:
            localStorage.removeItem('refresh')
            localStorage.removeItem('access')
            return {
                ...state,
                currentUser: {},
                isAuth: false,
                userCart: []
            }

        default: 
            return state
    }
}

export const setUser = user => ({ type: SET_USER, payload: user})
export const logout = () => ({ type: LOGOUT })
export const setCart = cart => ({type: SET_CART, payload: cart})