import Container from "../../Shared/UtilitiesCompnents/Container";

import chefService from '../../../assets/home/chef-service.jpg'
import HeroContent from "../../Shared/UtilitiesCompnents/HeroContent";
const ChefService = () => {
   return (
      <Container>
         <HeroContent title={'Bistro Boss'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.'} className={'bg-white w-[70%] mx-auto'} bgImage={chefService} />
      </Container>
   )
}
export default ChefService;