import { useState } from 'react';
import { Wrapper, Content, Logo, Burger } from './MobileHeader.styles';
import MobileMenu from '../MobileMenu';

const MobileHeader = ({ checked, setChecked }) => {
  return (
    <Wrapper>
      <Content>
        <Logo>
          <h1>Ramløse Fodbold</h1>
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
