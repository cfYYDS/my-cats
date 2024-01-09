'use client'
import { useState } from "react";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "./ui/pagination"
const  PaginationBottom =({curPage=1}:{curPage:number})=> {
  const [curPage1,setCurPage1]=useState(curPage)
  return (
    <Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
        {
          [...Array(10)].map((item,index)=>(
            <PaginationItem onClick={()=>setCurPage1(index+1)}>
      <PaginationLink href="#" isActive={curPage1==index+1}>{index+1}</PaginationLink>
    </PaginationItem>
          ))
        }
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>
  )
}
export default PaginationBottom