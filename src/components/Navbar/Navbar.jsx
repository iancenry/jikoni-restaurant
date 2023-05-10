import { Link } from 'react-router-dom';
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdOutlineRestaurantMenu} from 'react-icons/md'

import {images} from '../../constants'
import './Navbar.css';
import { useState } from 'react';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
  <nav className='app__navbar'>
    <div className="app__navbar-logo">
      <img src={images.jikoni} alt="app logo " />
    </div>
    <ul className="app__navbar-links">      
      <li className="p__opensans"><Link to="/" >Home</Link></li>
      <li className="p__opensans"><Link to='/about' >About</Link></li>
      <li className="p__opensans"><Link to='/menu'>Menu</Link></li>
      <li className="p__opensans"><Link to='/awards'>Awards</Link></li>
      <li className="p__opensans"><Link to='/contact'>Contact</Link></li>
    </ul>
    <div className="app__navbar-login">
      <a href="#login" className='p__opensans'>Log In / Register</a>
      <div />
      <a href="/" className='p__opensans'>Book a Table</a>
    </div>
    <div className="app__navbar-smallscreen">
      <GiHamburgerMenu color='#fff' fontSize={27}  onClick={() => setToggleMenu(true)} />
      {toggleMenu && (
        <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
          <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
          <ul className="app__navbar-smallscreen_links"  onClick={() => setToggleMenu(false)}>
            <li className="p__opensans" ><Link to="/" >Home</Link></li>
            <li className="p__opensans"><Link to='/about' >About</Link></li>
            <li className="p__opensans"><Link to='/menu'>Menu</Link></li>
            <li className="p__opensans"><Link to='/awards'>Awards</Link></li>
            <li className="p__opensans"><Link to='/contact'>Contact</Link></li>
          </ul>
        </div>
      )}
    </div>
  </nav>
)
};


export default Navbar;
