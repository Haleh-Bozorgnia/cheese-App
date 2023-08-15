import {baseUrl} from './base_url'
export const cheesesLoader = async ()=>{
    const response = await fetch(`${baseUrl}/cheese`)
    const cheeses = await response.json()
    console.log(cheeses);
    return cheeses
}

export const onecheeseLoader = async ({params})=>{
    const id = params.id
    const response = await fetch(`${baseUrl}/cheese/${id}`)
    const cheese = await response.json()
    return cheese
}