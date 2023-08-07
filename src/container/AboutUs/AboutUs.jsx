import './AboutUs.css';
import { images } from '../../constants';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding">
    <div className="app__aboutus-overlay flex__center ">
      <img src={images.G} alt="big letter G" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Welcome to our exquisite luxury restaurant, where culinary artistry
          meets opulent dining. With a legacy spanning decades, we have
          perfected the art of providing unparalleled gastronomic experiences.
          Nestled in the heart of [City], our establishment is a testament to
          our dedication to fine dining. Our commitment to using only the finest
          ingredients, crafting masterful dishes, and delivering impeccable
          service has made us a destination for discerning palates worldwide.
        </p>
        <button type="button" className="custom__button">
          Find Out More
        </button>
      </div>

      <div className="app__aboutus-content_knife flex-center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Our journey began in [Year], when visionary chef [Founder's Name]
          embarked on a quest to redefine luxury dining. Through innovation and
          unwavering passion, our restaurant quickly gained renown for pushing
          culinary boundaries. Over the years, we have garnered prestigious
          awards, becoming a hallmark of excellence. From our humble beginnings
          to our current stature, our history is a tapestry woven with flavors,
          traditions, and the pursuit of gastronomic perfection.
        </p>
        <button type="button" className="custom__button">
          Find Out More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
