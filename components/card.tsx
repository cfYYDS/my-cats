import Image from "next/image"
import {
    Card,
    CardContent,
    CardFooter,
  } from "./ui/card"
import { CatType } from "@/types/cat"
const SingleCard = ({data,className}:{data:CatType,className:string}) => {
  return (
    <Card className={className}>
  <CardContent className="p-6">
    <Image src={data.url} width={data.width} height={data.height} alt="" />
  </CardContent>
  {data.breeds[0]&&
  <CardFooter>
    <p>{data.breeds[0].description}</p>
  </CardFooter>
  }
</Card>
  )
}

export default SingleCard