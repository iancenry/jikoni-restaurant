import { Banner, SpecialMenu } from '../container';
import { images } from '../constants';
const Menu = () => {
  return (
    <>
      <Banner heading={'What We Offer'} page={'Menu'} />
      <SpecialMenu />
      <Banner
        img={images.happyHour}
        heading={'Happy Hours'}
        page={'Monday - Friday (4:00 Pm - 7:00 pm)'}
      />
    </>
  );
};

export default Menu;
