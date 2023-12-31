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
        <div className="nav-links-container">
        <Link className="nav-link" to="/shop">
          SHOP
        </Link>
        <Link className="nav-link" to="/Sign-in">
          SIGN-IN  
        </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );


  
};

export default Navigation;
