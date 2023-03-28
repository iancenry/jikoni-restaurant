import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants';

import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    <div className="app__specialMenu-title">
      <SubHeading title='Menu That Fits Your Palette' />
      <h1 className='headtext__cormorant'>Todays' Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu_wine flex__center">
        <p>Wine & Beer</p>
        <div className="app__specialMenu-menu_items"></div>
      </div>
    </div>
  </div>
);

export default SpecialMenu;
