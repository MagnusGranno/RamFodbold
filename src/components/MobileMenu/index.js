import { Wrapper, Menu, Navs } from './MobileMenu.styles';

// Routing
import { Link } from 'react-router-dom';

const MobileMenu = () => {
  return (
    <Wrapper>
      <Menu>
        <Navs>
          <a>Hold</a>
        </Navs>

        <Navs>
          <Link to="/kontakt" className="Link">
            <a>Kontakt</a>
          </Link>
        </Navs>

        <Navs>
          <a>Sponsorer</a>
        </Navs>
        <Navs>
          <a>Log ind</a>
        </Navs>
        <Navs>
          <a>Register</a>
        </Navs>
      </Menu>
    </Wrapper>
  );
};

export default MobileMenu;
