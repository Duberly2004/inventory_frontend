import { ICategory } from "../others/interfaces"
import api from "./api"

export const createCategory = async (category:ICategory) =>{
    const { data } = await api.post('/category',category)
    return data
}
export const listCategories = async () =>{
    const { data } = await api.get('/categories')
    return data
}
export const deleteCategory = async (_id:String) =>{
    const { data } = await api.delete(`/category/${_id}`)
    return data
}
export const updateCategory = async (_id:String,newCategory:ICategory) =>{
    const { data } = await api.patch(`/category/${_id}`,newCategory)
    return data
}