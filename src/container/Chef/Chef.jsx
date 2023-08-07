import './Chef.css';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What We Believe In</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote mark" />
          <p className="p__opensans">
            In each dish, I endeavor to capture emotions and memories,
            transcending taste to create a symphony of sensations.{' '}
          </p>
        </div>
        <p className="p__opensans">
          The culinary journey is a harmonious blend of art and science, where
          flavors dance and ingredients tell their stories. Join us in savoring
          life's moments through each meticulously crafted creation, where
          passion and palate converge to curate an unforgettable experience.
          Welcome to a world where every bite is a glimpse into my culinary
          soul.{' '}
        </p>
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
