'use client'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "./ui/pagination"
const  PaginationBottom =({curPage=1,callBack}:{curPage:number,callBack:(param:number)=>void})=> {
  return (
    <Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
        {
          [...Array(10)].map((item,index)=>(
            <PaginationItem onClick={()=>callBack(index+1)} key={index}>
      <PaginationLink href="#" isActive={curPage==index+1}>{index+1}</PaginationLink>
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