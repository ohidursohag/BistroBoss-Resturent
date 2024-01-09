

import useMenuItems from '../../../Hooks/useMenuItems';
import Container from '../../Shared/UtilitiesCompnents/Container';
import MyButton from '../../Shared/UtilitiesCompnents/MyButton';
import MenuCard from '../../Cards/MenuCard';
const OurMenu = () => {


   const {menuItems} = useMenuItems()
   // console.log(menuItems);
   const popularItems = menuItems?.filter(item => item.category === "popular")
   // console.log(popularItems);
   return (
      <Container>
         <div className="grid grid-cols-1 md:grid-cols-2  gap-5">
            {
               popularItems?.map(item => <MenuCard key={item?._id} item={item} />)
            }
         </div>
         <MyButton name={'View Full Menu'} className={'text-2xl my-5 mx-auto'} />
      </Container>
   )
}
export default OurMenu;