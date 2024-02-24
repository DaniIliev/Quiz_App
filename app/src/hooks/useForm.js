import { useState } from "react";
import {useNavigate} from "react-router-dom"

export function useForm(initialState, submitHandler){
    const [values, setValues] = useState(initialState);
    const navigate = useNavigate()
    const changeHandler = (e) => {
      e.preventDefault()
      const currentValue = e.target.value;
  
      setValues(state =>({
        ...state,
        [e.target.name]:currentValue
      }))
    }
    const submit = async (e) => {
        e.preventDefault()
        const result = await submitHandler(values)
    
        if(!result) throw Error
    
        navigate('/catalog')
        return result
      }

      return {
        values,
        changeHandler,
        submit
    }
}