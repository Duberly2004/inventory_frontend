import { ICategory, IProduct } from "../others/interfaces"
import api from "./api"

//------Category------
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

//------Product------
export const createProduct = async (product:IProduct)=>{
    const {data} = await api.post('/product',product)
    return data
}
export const listProducts = async ()=>{
    const {data} = await api.get('/products')
    return data
}
export const allProducts = async ()=>{
    const {data} = await api.get('/products/all')
    return data
}
export const deleteProduct = async (_id:String)=>{
    const {data} = await api.delete(`/product/${_id}`)
    return data
}
export const updateProduct = async (_id:String,newProduct:IProduct)=>{
    const {data} = await api.post(`/product/${_id}`,newProduct)
    return data
}