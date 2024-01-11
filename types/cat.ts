export type CatType = {
    id:string,
    height:number,
    width:number,
    url:string,
    breeds:{
        description:string,
        country_code:string,
        name:string,
        temperament:string,
        social_needs:number,
        origin:string,
        stranger_friendly:number,
    }[]
}