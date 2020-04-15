import { SET_ENG, SET_UKR, TOGGLE_MOB_MENU } from "./types"

export function setENG () {
    return {
        type: SET_ENG
    }
}

export function setUKR () {
    return {
        type: SET_UKR
    }
}

export function toggleMobileMenu () {
    return {
        type: TOGGLE_MOB_MENU
    }
}