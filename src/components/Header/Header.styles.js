import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: var(--primary-color);
  height: 100px;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  border-bottom-right-radius: 80px;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const Logo = styled.div`
  font-size: var(--fontBig);
  width: 100%;
  text-align: start;
  margin: 10px;
  cursor: pointer;
  text-shadow: 1px 2px 2px black;
  h1 {
    padding: 0;
    margin: 0;
  }
`;

export const Menu = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  font-size: var(--fontMed);
  font-weight: 800;
  padding-right: 20px;
`;
export const Navs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
  font-size: var(--fontBig);
  margin-top: 10px;
  margin-bottom: 15px;
  a {
    text-decoration: none;
    color: white;
    padding: 0;
  }

  :hover {
    background: transparent;

    a {
      color: #fff;
      text-decoration: underline 0.15em;
      text-underline-offset: 0.2em;
    }
  }
`;
