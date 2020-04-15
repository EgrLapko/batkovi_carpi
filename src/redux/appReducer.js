import { SET_UKR, SET_ENG, TOGGLE_MOB_MENU } from "./types"

const initialState = {
    isMobileMenuOpen: false,
    imageSRC: '',
    imageId: '',
    ukr: true,
    eng: false
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_UKR:
            return {...state, ukr: true, eng: false}
        case SET_ENG:
            return {...state, ukr: false, eng: true}
        case TOGGLE_MOB_MENU:
            return {...state, isMobileMenuOpen: !state.isMobileMenuOpen}
        default:
            return state
    }
}