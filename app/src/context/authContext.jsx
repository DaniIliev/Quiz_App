import { createContext, useContext, useState } from "react"
import {useNavigate} from "react-router-dom"

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [category, setCategory] = useState(Number)

    const navigate = useNavigate()

    const contextValues = {
        category,
        setCategory
    }


    return(
        <>
            <AuthContext.Provider value={contextValues}>
                    {children}
            </AuthContext.Provider>
        </>
    )
}

export const useAuthContext = () => {
    const context = useContext(AuthContext)
    return context;
}