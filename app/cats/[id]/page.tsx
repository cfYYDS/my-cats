import React from 'react'
async function getCatById(id:string){
    return fetch(`https://api.thecatapi.com/v1/images/${id}`).then(res=>res.json())
}
const page = ({params:{id}}:{params:{id:string}}) => {
  return (
    <div>{id}</div>
  )
}

export default page