import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getSingleMenuItem } from "../../../API/menuItems";
import { Helmet } from "react-helmet-async";
import Title from "../../../Components/Shared/UtilitiesCompnents/Title";
import UpdateItemForm from "../../../Components/Shared/AdminAndDashBoard/UpdateItemForm";

const UpdateItems = () => {

    const { id } = useParams()
    // console.log(id);
    const { data: menuItem,refetch } = useQuery({
        queryKey: ['menuItem', id],
        queryFn: async () => await getSingleMenuItem(id)
    })
    // console.log(menuItem);

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Add Items</title>
            </Helmet>
            <Title title="UPTADE AN ITEM" titleHeader="---Update existing?---" titleClassName={'!text-[36px] !py-3'} />
            <div className="py-10 bg-[#F3F3F3] w-[90%] mx-auto shadow">
                <UpdateItemForm  refetch={refetch} existingMenu={menuItem} id={id} />
            </div>
        </div>
    )
}
export default UpdateItems;