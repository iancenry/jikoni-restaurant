import React from 'react';
import {images} from '../../constants'

import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__foodImages'>
      <img src={images.tomatoright} alt="" className='tomato' />
      <img src={images.pepper} alt="" className='pepper' />
      <img src={images.rectangleleft} alt="" className='rectangleleft' />
      <img src={images.lemonslice} alt="" className='lemonslice' />
      <img src={images.leafa} alt="" className='leafleft' />
      <img src={images.lemonslice} alt="" className='lemonsliceleft' />
      <img src={images.garlicdark} alt="" className='garliclight' />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="authentic kenyan cuisine" />
      <h1 className='app__header-h1'>Kenyan Fine Dining Retold</h1>
      <p className="p__opensans" style={{margin: '2rem 0'}}>Savor our exquisite foods sourced from Kenyan farms and freshly made with love and care and by our world class chefs.</p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="Kenya fine dining header image" />
    </div>
  </div>
);

export default Header;
