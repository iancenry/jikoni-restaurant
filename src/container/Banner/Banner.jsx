import './Banner.css';

const Banner = ({ heading, page, img }) => {
  return (
    <div className="app__banner" style={{ background: img && `url(${img})` }}>
      <div className="banner__info">
        <h1 className="banner__title">{heading}</h1>
        <p className="p__cormorant">Home &gt; {page}</p>
      </div>
    </div>
  );
};

export default Banner;
