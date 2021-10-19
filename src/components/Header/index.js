import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Styles
import { Wrapper, Content, Logo, Menu, Navs } from './Header.styles';
// Components

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <Wrapper>
      <Content>
        <Logo>
          <Link to="/" className="Link">
            <h1>Ramløse Fodbold</h1>
          </Link>
        </Logo>
        <Menu>
          <Link to="/hold" className="Link">
            <Navs>
              <a>Hold</a>
            </Navs>
          </Link>
          <Link to="/sponsor" className="Link">
            <Navs>
              <a>Sponsorer</a>
            </Navs>
          </Link>
          <Link to="/kontakt" className="Link">
            <Navs>
              <a>Kontakt</a>
            </Navs>
          </Link>
          <Link to="/login" className="Link">
            <Navs>
              <a>Log ind</a>
            </Navs>
          </Link>
          <Link to="/register" className="Link">
            <Navs>
              <a>Register</a>
            </Navs>
          </Link>
        </Menu>
      </Content>
    </Wrapper>
  );
};

export default Header;
