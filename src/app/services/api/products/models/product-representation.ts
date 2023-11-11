import { RatingRepresentation } from "./rating-representation";

export interface productRepresentation{
 
    id?: number ,
     title?: string,
    category ?: string,
    description? : string,
    
    
    image?: string,
    price? : number,
    rating ? : RatingRepresentation
    

    
}