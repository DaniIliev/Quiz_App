import { envirenment } from "../envirenment/envirenment"

export const register = async (user) => {
    try{
        const responce = await fetch(`${envirenment.apiUrl}:signUp?key=${envirenment.webApiKey}`,{
            method: "POST",
            headers:{
                'Content-Type': 'application.json'
            },
            body: JSON.stringify(user)
        })
        const result = await responce.json()
        await createUserProfile(user)

    return result

    }catch(error){
        console.log(error);
    return result
}
}  

export const login = async (user) => {
    const responce = await fetch(`${envirenment.apiUrl}:signInWithPassword?key=${envirenment.webApiKey}`, {
        method: 'POST',
        headers:{
            'Content-type': 'application.json'
        },
        body: JSON.stringify(user)
    })

    const result = await responce.json()
    console.log(result)
    return result
}

export const createUserProfile = async(user) => {
    const data = {
        username: user.username,
    }
    try {
        const createdUser = await fetch(`https://quizz-app-1abc5-default-rtdb.firebaseio.com/user.json`, {
            method: 'POST',
            headers:{
                'content-type': 'application.json'
            },
            body: JSON.stringify(data)
        })
        return createdUser
    } catch (error) {
        console.log(error)
    }
}