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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
              pharetra adipiscing ultrices vulputate posuere tristique. In sed
              odio nec aliquet eu proin mauris et.
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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
          voluptatem quia molestiae, praesentium blanditiis nemo perspiciatis.
          Est saepe dolores debitis mollitia in quibusdam corrupti quas odio.
          sapiente fugit laborum nesciunt ratione. Fugit necessitatibus nam,
          itaque nostrum est at eligendi, repellat inventore suscipit totam
          quasi beatae eos odio quis neque fuga. Modi harum dolorem delectus,
        </p>
        <p className="p__opensans">
          sapiente fugit laborum nesciunt ratione. Fugit necessitatibus nam,
          itaque nostrum est at eligendi, repellat inventore suscipit totam
          quasi beatae eos odio quis neque fuga. Modi harum dolorem delectus,
          odio obcaecati ipsum optio dicta. Soluta, quidem obcaecati
          perspiciatis quas eius quibusdam eligendi dolorem quam totam
          praesentium voluptatem. Nemo, dignissimos iste! Nihil et ab
          consectetur, aliquam impedit fuga non, odit est, quibusdam aliquid vel
          repellat voluptates sequi. Ea veniam nemo deserunt veritatis a
          facilis, inventore eius!
        </p>
      </div>
    </>
  );
};

export default History;
