import {User} from "~~/interfaces/user"

export interface ProductStatePinia {
    products: Array<Product>
}

export interface Product {
    id: string,
    title?: string,
    price: number,
    rate: number,
    newprice: number,
    img: string,
    owner: User,
    description: string,
    reviews: Array<Review>,
    similar?: Array<Product>,
    tags: Array<string>,
    type: string,
    subtype: string
}

export interface Review {
    id: string,
    rate: number,
    value: string,
    owner: User,
    parentItemTitle: string,
}

export interface dataProduct {
    productPreview: productPreview,
    previewData: previewData,
}

export interface productPreview {
    title: string,
    img: string,
}

export interface productType {
    type?: string,
    subtype?: string,
}

export interface previewData {
    price: number,
    newprice: number,
    owner: User,
    productType: productType
}

export interface productDescription {
    description: string
}

export interface productReviews {
    reviews: Array<Review>
}

export interface reviewRate {
    rate: number,
}