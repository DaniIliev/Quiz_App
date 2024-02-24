import { createContext, useContext, useState } from "react"
import {useNavigate} from "react-router-dom"

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [category, setCategory] = useState(Number)
    const [questionNumber ,setQuestionNumber] = useState(0);
    // const [profit,setProfit] = useState('$0')
    const navigate = useNavigate()

    const contextValues = {
        category,
        setCategory,
        questionNumber,
        setQuestionNumber,
        // profit,
        // setProfit
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