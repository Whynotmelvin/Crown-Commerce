import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import {ReactComponent as CrownLogo} from '../../assests/crown.svg';
import './navigation.styles.scss'

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className='Logo'/>
        </Link>
        <div className="links-container"></div>
        <Link className="nav-links-container" to="/shop">
          SHOP
        </Link>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
