import './Chef.css';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What We Believe In</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote mark" />
          <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <p className="p__opensans"> Unde libero soluta, sapiente nam sit, quidem natus illum possimus incidunt ea placeat maiores corrupti perspiciatis quos voluptates quisquam eius eligendi labore nihil, dolore quam ut quae beatae. Numquam id omnis nisi? </p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="signature" />
      </div>

    </div>
  </div>
);

export default Chef;
