import axiosSecure from "./axiosSecure"


// get All Menu Items
export const getMenuItems = async () => {
   const { data } = await axiosSecure.get('/menu-items');
   // console.log(data);
   return data
}

// Get single Menu Item by its id
export const getSingleMenuItem = async (id) => { 
   // console.log(id);
   const { data } = await axiosSecure.get(`/menu-item/${id}`);
   // console.log(data);
   return data;
};

// Add new Menu Item
export const addNewMenuItem = async (newMenuItem) => {
   const { data } = await axiosSecure.post('/add-menu-item', newMenuItem);
   return data;
}

// Update Menu Item

export const updateMenuItem = async( id, updatedMenu )=> {
   const { data } = await axiosSecure.patch(`update-menu-item/${id}`, updatedMenu)
   console.log(data);
   return data;
}
