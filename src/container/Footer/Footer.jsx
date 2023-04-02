import { FooterOverlay, Newsletter } from '../../components';
import { BsFacebook, BsTwitter, BsInstagram} from 'react-icons/bs';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />
  </div>
);

export default Footer;
