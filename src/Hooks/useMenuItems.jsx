import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";
import { getMenuItems } from "../API/menuItems";



const useMenuItems = () => { 
   const { data: menuItems, refetch } = useQuery({
      queryKey: ['menuItems'],
      queryFn:async () => await getMenuItems()
   })
   // console.log(menuItems);
   return {menuItems, refetch};
}
export default useMenuItems;




