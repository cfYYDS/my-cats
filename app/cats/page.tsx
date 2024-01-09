import SingleCard from '@/components/card'
import PaginationBottom from '@/components/pagination-bottom'
import { CatType } from '@/types/cat';
import React, { Fragment } from 'react'

async function getCats(limit:number){
  const res = await fetch(`https://api.thecatapi.com/v1/images/search?limit=${limit}`);
  return res.json();
}
var cats:CatType[] = [];
var limit = 10;
getCats(limit).then(data=>cats = data)

const page = () => {
  return (
    <>
    <div className='p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-5 xl:grid-cols-8 gap-3'>
      {cats.map((cat)=>(
        <Fragment  key={cat.id}>
          <SingleCard className='w-48 h-min' data={cat}/>
      </Fragment>
      ))}
    </div>
    <PaginationBottom curPage={1}/> 
    </>
    
  )
}

export default page