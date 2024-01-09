import { useMutation } from "@tanstack/react-query";
import { updateMenuItem } from "../API/menuItems";


const useUpdateMenu = () => {
   const { mutate: updateMenu} = useMutation({
      mutationKey: ['update-menu'],
      mutationFn: async ({ id, updatedMenu }) => await updateMenuItem(id, updatedMenu)
   })
   return {updateMenu}
}
export default useUpdateMenu;