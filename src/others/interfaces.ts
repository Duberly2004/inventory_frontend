import React from "react"

export interface ILogin {
    email:string
    password:string
}
export interface IUser extends ILogin {
    name:string
    url_avatar:string
}
export interface IAuth  extends IUser{
    access_token:string
} 

export interface IItem {
    name: string
    path: string
}
export interface ICategory {
    name:string
    color:string
}
export interface ILCategory extends ICategory{
    _id: string
}

export interface IProduct {
    name:string
    stock:number
    description:string
    price:number
    status:string
    category_id:string
    url_image:string
}
export interface ILProduct extends IProduct {
    _id:string
    category:ILCategory
} 
export interface IProductDetail extends IProduct {
    _id:string
    category: {
        _id: string
        name:string
        color:string
        user:{
            _id: string
            name:string
            url_avatar:string
        }
    }
} 
//Interface Dashboard
export interface IRecentSale {
    name:string
    email:string
    url_image:string
    amount:number
}

export interface ISumary{
    title:string
    amount:number
    description:string
    icon:React.ReactNode
}