import React from "react"

export interface ILogin {
    email:string
    password:string
}
export interface IUser extends ILogin {
    name:string
}
export interface IAuth  extends IUser{
    access_token:string
} 

export interface IItem {
    name: string
    path: string
}

export interface IProduct {
    name:string
    description:string
    price:number
    status:boolean
    category_id:number
    url_image:string
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