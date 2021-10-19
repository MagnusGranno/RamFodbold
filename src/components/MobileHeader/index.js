import { useState } from 'react';
// Styles
import { Wrapper, Content, Logo, Burger } from './MobileHeader.styles';
// Components
import MobileMenu from '../MobileMenu';
// Routing
import { Link } from 'react-router-dom';

const MobileHeader = ({ checked, setChecked }) => {
  return (
    <Wrapper>
      <Content>
        <Logo>
          <Link to="/" className="Link">
            <h1>Ramløse Fodbold</h1>
          </Link>
        </Logo>

        <Burger>
          <input
            type="checkbox"
            onClick={() => {
              setChecked(!checked);
            }}
          />
          <span></span>
          <span></span>
          <span></span>
        </Burger>
      </Content>
    </Wrapper>
  );
};

export default MobileHeader;
