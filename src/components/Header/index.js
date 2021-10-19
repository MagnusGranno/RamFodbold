import React, { useState } from 'react';
// Styles
import { Wrapper, Content, Logo, Menu, Navs } from './Header.styles';
// Components

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <Wrapper>
      <Content>
        <Logo
          onClick={() => {
            console.log(window.innerWidth);
          }}
        >
          <h1>Ramløse Fodbold</h1>
        </Logo>
        <Menu>
          <Navs>
            <a>Hold</a>
          </Navs>
          <Navs>
            <a>Log ind</a>
          </Navs>
          <Navs>
            <a>Kontakt</a>
          </Navs>
          <Navs>
            <a>Sponsorer</a>
          </Navs>
        </Menu>
      </Content>
    </Wrapper>
  );
};

export default Header;
