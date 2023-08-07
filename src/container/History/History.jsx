import { SubHeading } from '../../components';
import { images } from '../../constants';
import './History.css';

const History = () => {
  return (
    <>
      <div
        className="app__bg section__padding history"
        style={{ textAlign: 'center' }}
      >
        <div className="history__title">
          <SubHeading title="Our History" />
          <h1 className="headtext__cormorant">
            Serving Customers For Over A Decade
          </h1>
        </div>
        <div className="app__wrapper">
          <div className="app__wrapper_info history-left">
            <p className="p__opensans">
              Our journey began in [Year], when visionary chef [Founder's Name]
              embarked on a quest to redefine luxury dining. Through innovation
              and unwavering passion, our restaurant quickly gained renown for
              pushing culinary boundaries. Over the years, we have garnered
              prestigious awards, becoming a hallmark of excellence. From our
              humble beginnings to our current stature, our history is a
              tapestry woven with flavors, traditions, and the pursuit of
              gastronomic perfection.
            </p>
            <img src={images.historyRight} alt="" />
          </div>

          <div
            className="app__wrapper_img history-right"
            style={{ flexDirection: 'column' }}
          >
            <img src={images.historyLeft} alt="" />
            <h3 className="p__cormorant">Over The Year</h3>
            <div className="history-right__info">
              <div>
                <SubHeading title="30+" color="#DCCA87" />
                <p className="p__cormorant">Breakfast Options</p>
              </div>
              <div>
                <SubHeading title="50+" color="#DCCA87" />
                <p className="p__cormorant">Dinner Options</p>
              </div>
              <div>
                <SubHeading title="5" color="#DCCA87" />
                <p className="p__cormorant">New Locations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="app__bg section__padding about "
        style={{ textAlign: 'center' }}
      >
        <div className="about__title">
          <SubHeading title="About Us" />
          <h1 className="headtext__cormorant">Happy Hour With Us</h1>
        </div>
        <p className="p__opensans">
          As you step into our elegantly designed space, you'll be immersed in
          an atmosphere that exudes sophistication and warmth. Our attentive
          staff, with a deep knowledge of food and wine pairings, is dedicated
          to curating an impeccable dining experience for you and your
          companions.
        </p>
        <p className="p__opensans">
          At the core of our philosophy is a commitment to using only the
          finest, locally sourced ingredients, ensuring each dish tells a story
          of its origin and flavor. Our master chefs, trained in the most
          prestigious culinary academies, bring passion and precision to every
          creation, presenting an evolving menu that pays homage to tradition
          while embracing innovation.
        </p>
        <p className="p__opensans">
          As you step into our elegantly designed space, you'll be immersed in
          an atmosphere that exudes sophistication and warmth. Our attentive
          staff, with a deep knowledge of food and wine pairings, is dedicated
          to curating an impeccable dining experience for you and your
          companions.
        </p>
      </div>
    </>
  );
};

export default History;
