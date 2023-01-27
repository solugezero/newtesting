import { Review } from "./product"

export interface User {
    id: string,
    img: string,
    name: string,
    reviews?: Array<Review>,
    rate: number
}