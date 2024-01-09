import Container from "../../Shared/UtilitiesCompnents/Container";
import MenuItemCard from "../../Cards/MenuItemCard";


const ChefRecomanded = () => {
   return (
      <Container className='mb-[100px]'>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <MenuItemCard />
            <MenuItemCard />
            <MenuItemCard />
         </div>
      </Container>
   )
}
export default ChefRecomanded;