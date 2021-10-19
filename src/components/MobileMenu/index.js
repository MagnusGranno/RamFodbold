import { Wrapper, Menu, Navs } from './MobileMenu.styles';

const MobileMenu = () => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default MobileMenu;
