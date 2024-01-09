import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
import Container from '../Shared/UtilitiesCompnents/Container';
import useMenuItems from '../../Hooks/useMenuItems';
import ItemsByCatgory from './ItemsByCatgory';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const MyTabs = () => {
   const categories = ['salad', "pizza", "soup", "dessert", "drinks"];
   const { category } = useParams()
   const initialIndex = categories.indexOf(category);
   const {menuItems} = useMenuItems();
   const [tabInex, setTabIndex] = useState(initialIndex);
   // console.log(menuItems);
   // const offerItems = menuItems.filter(item => item?.category === "offered");
   const dessertItems = menuItems?.filter(item => item?.category === "dessert");
   const pizzaItems = menuItems?.filter(item => item?.category === "pizza");
   const saladItems = menuItems?.filter(item => item?.category === "salad");
   const soupItems = menuItems?.filter(item => item?.category === "soup");
   const drinksItems = menuItems?.filter(item => item?.category === "drinks");

   return(
      <Container>
         <Tabs defaultIndex={tabInex} onSelect={(index) => setTabIndex(index)}>
            <TabList className={'flex justify-center my-5 text-lg font-medium uppercase cursor-pointer gap-16 duration-500'} >
               
               <Tab selectedClassName='text-[#BB8506] outline-none border-b-[3px] border-[#BB8506]'>Salad</Tab>
               <Tab selectedClassName='text-[#BB8506] outline-none border-b-[3px] border-[#BB8506]'>Pizza</Tab>
               <Tab selectedClassName='text-[#BB8506] outline-none border-b-[3px] border-[#BB8506]'>Soups</Tab>
               <Tab selectedClassName='text-[#BB8506] outline-none border-b-[3px] border-[#BB8506]'>Dessert</Tab>
               <Tab selectedClassName='text-[#BB8506] outline-none border-b-[3px] border-[#BB8506]'>Drinks</Tab>
            </TabList>

            <div className='mt-10 mb-20'>
               
               <TabPanel>
                  <ItemsByCatgory category={saladItems} />
               </TabPanel>
               <TabPanel>
                  <ItemsByCatgory category={pizzaItems} />

               </TabPanel>
               <TabPanel>
                  <ItemsByCatgory category={soupItems} />
               </TabPanel>
               <TabPanel>
                  <ItemsByCatgory category={dessertItems}/>
               </TabPanel>
               <TabPanel>
                  <ItemsByCatgory category={drinksItems}/>
               </TabPanel>
            </div>
            
         </Tabs>
      </Container>
   )}
export default MyTabs;