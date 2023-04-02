import { FooterOverlay, Newsletter } from '../../components';
import { BsFacebook, BsTwitter, BsInstagram} from 'react-icons/bs';
import './Footer.css';
import { images } from '../../constants';

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links" style={{zIndex: '1'}}>
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">9 W 53rd St, Nairobi, Nrb 10019, Kenya</p>
        <p className="p__opensans">+254 745 554 866</p>
        <p className="p__opensans">+254 745 554 784</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.jikoni} alt="jikoni footer logo" />
        <p className="p__opensans">"The best way to find yourself is to love yourself in the service of others"</p>
        <img src={images.spoon} alt="spoon" style={{marginTop: '15px'}} />
        <div className="app__footer-links_icons">
          <BsFacebook />
          <BsTwitter />
          <BsInstagram />
        </div>
      </div>
      <div className="app__footer-links_work">
      <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday - Friday</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday - Sunday</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright" style={{zIndex: '1'}}>
      <p className='p__opensans'>&copy; 2023 Jikoni. All Rights Reserved </p>
    </div>
  </div>
);

export default Footer;
