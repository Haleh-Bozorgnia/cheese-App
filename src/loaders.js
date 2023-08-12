import {baseUrl} from './base_url'
export const cheeseLoader = async ()=>{
    const response = await fetch(`${baseUrl}/cheese`)
    const cheese = await response.json()
    return cheese
}

export const onecheeseLoader = async ({params})=>{
    const id = params.id
    const response = await fetch(`${baseUrl}/cheese/${id}`)
    const cheese = await response.json()
    return cheese
}