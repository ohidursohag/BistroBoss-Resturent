
import Title from "../../../Components/Shared/UtilitiesCompnents/Title";
import { Helmet } from "react-helmet-async";
import AddAndUpdataItemForm from "../../../Components/Shared/AdminAndDashBoard/AddItemForm";

const AddItems = () => {
   return (
      <div>
         <Helmet>
            <title>Bistro Boss | Add Items</title>
         </Helmet>
         <Title title="ADD AN ITEM" titleHeader="---What's new?---" titleClassName={'!text-[36px] !py-3'} />
         <div className="py-10 bg-[#F3F3F3] w-[90%] mx-auto shadow">
            <AddAndUpdataItemForm  />
         </div>
      </div>
   )
}
export default AddItems;