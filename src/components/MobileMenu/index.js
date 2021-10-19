import { Wrapper, Menu, Navs } from './MobileMenu.styles';

// Routing
import { Link } from 'react-router-dom';

const MobileMenu = () => {
  return (
    <Wrapper>
      <Menu>
        <Link to="/hold" className="Link">
          <Navs>
            <a>Hold</a>
          </Navs>
        </Link>

        <Link to="/kontakt" className="Link">
          <Navs>
            <a>Kontakt</a>
          </Navs>
        </Link>

        <Link to="/sponsor" className="Link">
          <Navs>
            <a>Sponsorer</a>
          </Navs>
        </Link>

        <Link to="/login" className="Link">
          <Navs>
            <a>Log ind</a>
          </Navs>
        </Link>

        <Link to="/Register" className="Link">
          <Navs>
            <a>Register</a>
          </Navs>
        </Link>
      </Menu>
    </Wrapper>
  );
};

export default MobileMenu;
