
import HeroContent from "./HeroContent";
import MyButton from "./MyButton";
import MenuCard from "../../Cards/MenuCard";
import Container from "./Container";
import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const MenuItemsByCategory = ({ title, description, items, heroBg,category }) => {
   return (
      <div className="mb-5">
         {
            title && <HeroContent title={title} description={description} className={'bg-black/50 w-[70%] mx-auto text-white'} bgImage={heroBg} />
         }
         <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
               {
                  // eslint-disable-next-line react/prop-types
                  items?.map(item => <MenuCard key={item?._id} item={item} />)
               }
            </div>
            <Link to={`/our-shop/${category}`}>
               <MyButton name={'ORDER YOUR FAVOURITE FOOD'} className={'mx-auto my-5'} />
            </Link>
         </Container>
      </div>
   )
}
export default MenuItemsByCategory;