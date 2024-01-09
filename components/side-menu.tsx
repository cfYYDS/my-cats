 'use client'
import * as React from "react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu"
import { menus } from "@/data/menu"

const menuList = menus
 
const  SideMenu = ()=> {
  return (
    <div className="p-5">
    <NavigationMenu>
      <NavigationMenuList>
       {menuList.map((menu)=>(
         <NavigationMenuItem key={menu.href}>
         <Link href={menu.href} legacyBehavior passHref>
           <NavigationMenuLink className={navigationMenuTriggerStyle()}>
             {menu.title}
           </NavigationMenuLink>
         </Link>
       </NavigationMenuItem>
       ))}
      </NavigationMenuList>
    </NavigationMenu>
    </div>
  )
}
export default SideMenu
 