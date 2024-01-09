import { Helmet } from "react-helmet-async";
import BannerContent from "../Components/Shared/UtilitiesCompnents/BannerContent";
import Title from "../Components/Shared/UtilitiesCompnents/Title"
import bannerBg from '../assets/menu/banner3.jpg'
import desseertBg from '../assets/menu/dessert-bg.jpeg'
import pizzaBg from '../assets/menu/pizza-bg.jpg'
import saladBg from '../assets/menu/salad-bg.jpg'
import soupBg from '../assets/menu/soup-bg.jpg'
import useMenuItems from "../Hooks/useMenuItems";
import MenuItemsByCategory from "../Components/Shared/UtilitiesCompnents/MenuItemsByCategory";

const OurMenuPage = () => {
   
   const {menuItems} = useMenuItems()
   console.log(menuItems);
   const offerItems = menuItems?.filter(item => item?.category === "offered");
   const dessertItems = menuItems?.filter(item => item?.category === "dessert");
   const pizzaItems = menuItems?.filter(item => item?.category === "pizza");
   const saladItems = menuItems?.filter(item => item?.category === "salad");
   const soupItems = menuItems?.filter(item => item?.category === "soup");
   const drinksItems = menuItems?.filter(item => item?.category === "drinks");
   // console.log(soupItems);
   return(
      <div>
         <Helmet>
            <title>Bistro Boss | Our Menu</title>
         </Helmet>
         {/* Banner */}
         <div>
            <BannerContent title={'OUR MENU'} description={'Would you like to try a dish?'} image={bannerBg}/>
         </div>
         {/* Today's Foods */}
         <div className="my-[100px]">
            <Title titleHeader="---Don't miss---" title="TODAY'S OFFER"></Title>           
            <MenuItemsByCategory items={offerItems} />
         </div>

         {/* Desserts */}
         <div className="mb-5">
            <MenuItemsByCategory title={'DESSERTS'} description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} items={dessertItems} category={"dessert"} heroBg={desseertBg} />
         </div>
         
         {/* Pizza */}
         <div className="mb-5">
            <MenuItemsByCategory title={'PIZZA'} description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} items={pizzaItems} category={'pizza'} heroBg={pizzaBg} />
         </div>
         {/* Salads */}
         <div className="mb-5">
            <MenuItemsByCategory title={'SALADS'} description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} items={saladItems} category={'salad'} heroBg={saladBg} />
         </div>
         {/* Soups */}
         <div className="mb-5">
            <MenuItemsByCategory title={'SOUPS'} description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} items={soupItems} category={'soup'} heroBg={soupBg} />
         </div>
         {/* Drinks */}
         <div className="mb-5">
            <MenuItemsByCategory title={'DRINKS'} description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} items={drinksItems} category={"drinks"} heroBg={soupBg} />
         </div>
      </div>
   )}
export default OurMenuPage;