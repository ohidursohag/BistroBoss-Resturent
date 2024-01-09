import axios from "axios";

// Method 1
export const uploadImage = async (image) => {
   try {
      const formData = new FormData();
      formData.append('image', image);
      const { data } = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_UPLOAD_API_KEY}`, formData);
      return data.data;
   } catch (error) {
      return {error: error.message}
   }
}

// Method 2
// export const uploadImage2 = async (image) => {
//    const imageFile = { image: image }
//    // console.log(image);
//    const {data} = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_UPLOAD_API_KEY}`,imageFile,
//       { headers: { 'content-type': 'multipart/form-data' }})
//    return data;
// }