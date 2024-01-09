import Image from "next/image"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "./ui/card"
import { CatType } from "@/types/cat"
const SingleCard = ({data,className}:{data:CatType,className:string}) => {
  return (
    <Card className={className}>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    <Image src={data.url} width={data.width} height={data.height} alt="" />
  </CardContent>
  <CardFooter>
    <p>123</p>
  </CardFooter>
</Card>
  )
}

export default SingleCard