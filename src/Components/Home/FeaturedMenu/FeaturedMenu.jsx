
import featured from '../../../assets/home/featured.jpg'
import Container from '../../Shared/UtilitiesCompnents/Container';
import MyButton from '../../Shared/UtilitiesCompnents/MyButton';
import Title from '../../Shared/UtilitiesCompnents/Title';
const FeaturedMenu = () => {
   return (
      <div style={{ backgroundImage: `url(${featured})`}} className="bg-black/60 bg-blend-overlay bg-fixed bg-cover bg-center pt-10 pb-20 mb-[100px]">
         <Title titleClassName={'!text-white border-y-white'} titleHeader="---Check it out---" title="FROM OUR MENU"></Title>
         <Container className='mt-5 flex gap-10 items-center mb-10'>
            <div className='h-[400px] '>
               <img className='h-full w-full' src={featured} alt="" />
            </div>
            <div className='text-white w-[50%]'>
               <p className='text-xl '>March 20, 2023</p>
               <p className='text-2xl '>WHERE CAN I GET SOME?</p>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>

               
               <MyButton name={'Reade More'} className={'text-white text-xl  my-5 '}/>
            </div>
         </Container>
      </div>
   )
}
export default FeaturedMenu;