'use client'
import SingleCard from '@/components/card'
import { CatType } from '@/types/cat';
import Link from 'next/link';
import React, { Fragment,useEffect,useState } from 'react'

async function getCats(limit:number=20){
  const res = await fetch(`https://api.thecatapi.com/v1/images/search?has_breeds=0&limit=${limit}&api_key=${process.env.PRIVACY_KET}`);
  return res.json();
}
var limit = 24;

const page = () => {
  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);
  const [cats,setCats] = useState<CatType[]>([])
  useEffect(()=>{
    getCats(limit).then(data=>{
      setCats(data)})
  },[])
  return (
    <>
    <div className='p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-5 2xl:grid-cols-8 gap-3'>
      {domLoaded&&cats&&cats.map((cat)=>(
        <Link href={`/cats/${cat.id}`} key={cat.id}>
          <SingleCard className='w-full' data={cat}/>
      </Link>
      ))}
    </div>
    </>
    
  )
}

export default page