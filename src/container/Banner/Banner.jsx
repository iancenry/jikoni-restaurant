import './Banner.css';

const Banner = ({ page }) => {
  return (
    <div className="app__banner">
      <div className="banner__info">
        <h1 className="banner__title">Welcome to Jikoni</h1>
        <p className="p__cormorant">Home &gt; {page}</p>
      </div>
    </div>
  );
};

export default Banner;
