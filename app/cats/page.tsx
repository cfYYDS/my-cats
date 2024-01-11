'use client'
import SingleCard from '@/components/card'
import PaginationBottom from '@/components/pagination-bottom'
import { CatType } from '@/types/cat';
import Link from 'next/link';
import React, { Fragment,useEffect,useState } from 'react'

async function getCats(limit:number=20,page:number=0){
  const res = await fetch(`https://api.thecatapi.com/v1/images/search?has_breeds=0&limit=${limit}&page=${page}&api_key=${process.env.PRIVACY_KET}`);
  return res.json();
}
var limit = 20;

const page = () => {
  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);
  const [curPage,setCurPage] = useState(1)
  const [cats,setCats] = useState<CatType[]>([])
  useEffect(()=>{
    getCats(limit,curPage).then(data=>{
      console.log(data);
      
      setCats(data)})
  },[curPage])
  return (
    <>
    <div className='p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-5 2xl:grid-cols-8 gap-3'>
      {domLoaded&&cats&&cats.map((cat)=>(
        <Link href={`/cats/${cat.id}`} key={cat.id}>
          <SingleCard className='w-full' data={cat}/>
      </Link>
      ))}
    </div>
    <PaginationBottom curPage={curPage} callBack={setCurPage}/> 
    </>
    
  )
}

export default page