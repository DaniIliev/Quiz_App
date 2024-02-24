import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { envirenment } from "../envirenment/envirenment"


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [category, setCategory] = useState(Number);
  const [questionNumber, setQuestionNumber] = useState(0);

  const [auth, setAuth] = useLocalStorage("user", {});

  const navigate = useNavigate();

  const register = async (user) => {
    try {
      const responce = await fetch(
        `${envirenment.apiUrl}:signUp?key=${envirenment.webApiKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application.json",
          },
          body: JSON.stringify(user),
        }
      );
      const result = await responce.json();
      await createUserProfile(user);

      setAuth({ email: result.email, localId: result.localId });
      return result;
    } catch (error) {
      console.log(error);
      return result;
    }
  };

  const login = async (user) => {
    const responce = await fetch(
      `${envirenment.apiUrl}:signInWithPassword?key=${envirenment.webApiKey}`,
      {
        method: "POST",
        headers: {
          "Content-type": "application.json",
        },
        body: JSON.stringify(user),
      }
    );

    const result = await responce.json();
    setAuth({ email: result.email, localId: result.localId });
    return result;
  };

  const contextValues = {
    login,
    register,
    category,
    setCategory,
    questionNumber,
    setQuestionNumber,
    // profit,
    // setProfit
  };

  return (
    <>
      <AuthContext.Provider value={contextValues}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  return context;
};
