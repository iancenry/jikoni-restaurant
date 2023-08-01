import { Gallery, Banner, History } from '../container';
const About = () => {
  return (
    <>
      <Banner heading={'Welcome to Jikoni'} page={'About Us'} />
      <History />
      <Gallery />
    </>
  );
};

export default About;
