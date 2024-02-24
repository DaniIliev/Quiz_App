import { useState } from "react"

export const useLocalStorage = (key, initialState) => {

    const [state, setState] = useState(() => {
        const persistedStateSerialized = localStorage.getItem(key)
        
        if(persistedStateSerialized){
            console.log(persistedStateSerialized)

            const persistedState = JSON.parse(persistedStateSerialized)
            return persistedState
        }
        return initialState
    })

    const setLocalStorageState = (value) => {
        setState(value)
        console.log(state)

        localStorage.setItem(key, JSON.stringify(value))
    }

    return [state, setLocalStorageState]
}