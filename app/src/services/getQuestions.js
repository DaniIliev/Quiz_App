export async function getFirstFiveQuestions(category){
    const data = await fetch(`https://opentdb.com/api.php?amount=5&category=${category}&difficulty=easy&type=multiple`,)
    const resp = await data.json()

    return resp.results
}

export async function getSecondFiveQuestions(category){
    const data = await fetch(`https://opentdb.com/api.php?amount=5&category=${category}&difficulty=medium&type=multiple`,)
    const resp = await data.json()

    return resp.results
}

export async function getLastFiveQuestions(category){
    const data = await fetch(`https://opentdb.com/api.php?amount=5&category=${category}&difficulty=hard&type=multiple`,)
    const resp = await data.json()
    
    return resp.results
}