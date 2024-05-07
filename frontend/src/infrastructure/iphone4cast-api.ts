import type {FormData} from "../model"

export const getPrice = (formData:FormData):Promise<number> => {
    return fetch("/api/pred", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            year: formData.year,
            special: formData.special,
            large: formData.large,
            memory: formData.memory 
        })
    })
    .then(res => res.text())
    .then((data:string) => {
        return Math.floor(Number(data) * 100) / 100
    })
}

export const getGraph = (formData:FormData & {price:number}):Promise<string> => {
    return fetch("/api/graph", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            year: formData.year,
            special: formData.special,
            large: formData.large,
            memory: formData.memory,
            price: formData.price
        })
    })
    .then(res => res.blob())
    .then(blob => URL.createObjectURL(blob))
}