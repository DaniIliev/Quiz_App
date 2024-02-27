import { envirenment } from "../envirenment/envirenment"

// export const register = async (user) => {
//     try{
//         const responce = await fetch(`${envirenment.apiUrl}:signUp?key=${envirenment.webApiKey}`,{
//             method: "POST",
//             headers:{
//                 'Content-Type': 'application.json'
//             },
//             body: JSON.stringify(user)
//         })
//         const result = await responce.json()
//         await createUserProfile(user)

//     return result

//     }catch(error){
//         console.log(error);
//     return result
// }
// }  

// export const login = async (user) => {
//     const responce = await fetch(`${envirenment.apiUrl}:signInWithPassword?key=${envirenment.webApiKey}`, {
//         method: 'POST',
//         headers:{
//             'Content-type': 'application.json'
//         },
//         body: JSON.stringify(user)
//     })

//     const result = await responce.json()
//     console.log(result)
//     return result
// }


export const patch = async (localId, values) => {
    let profit = Number(values.slice(1))

    
    const user = await findOneById(localId)

    if(user[0].profit != undefined){
       profit+= Number(user[0].profit)
    }

    const data = {
        profit:profit
    }

    const responce = await fetch(`https://quizz-app-1abc5-default-rtdb.firebaseio.com/user/${user[0].id}.json`,{
        method: 'PATCH',
        headers: {
            'Content-Type': 'application.json'
        },
        body: JSON.stringify(data)
    })
    const result = await responce.json()

    return result
}

export const createUserProfile = async(user, localId) => {
    const data = {
        username: user.username,
        localId: localId,
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

export const getAllUsers = async () => {
    try {
        const users = await fetch(`https://quizz-app-1abc5-default-rtdb.firebaseio.com/user.json`)
        const usersList = await users.json()

        const result = []

        for (let i = 0; i < Object.values(usersList).length; i++) {

            result.push({
              id: Object.keys(usersList)[i],
              ...Object.values(usersList)[i],
            });
          }

          return result
    } catch (error) {
        console.log(error)
    }
}

export const findOneById = async (localId) => {
    console.log(localId)
    const allUsers = await getAllUsers()
    console.log(allUsers)
    const user = allUsers.filter(u => u.localId == localId)
    console.log(user)
    return user
}