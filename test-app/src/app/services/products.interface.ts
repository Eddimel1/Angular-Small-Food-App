import { Product } from "../components/pages/menu/menu.interface"

export interface ResponseType {
expires: number
isStale: boolean
menuItems:Product[] 
number: number
offset: number
processingTimeMs: number
totalMenuItems: number
type: "string"
}

export interface extendedProduct extends Product{
    amount:number
    price:number
}