import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: var(--primary-color);
  width: 100%;
  height: 85vh;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  animation: mobileMenuIn 1s;

  @keyframes mobileMenuIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Menu = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font-size: 2rem;
  font-weight: 800;

  .Link {
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: var(--font-color);
    padding: 0;
    margin: 0;
    :hover {
      background: rgba(0, 0, 0, 0.1);
      a {
        color: #fff;
        text-decoration: underline 0.15em;
        text-underline-offset: 0.2em;
      }
    }
  }
`;
export const Navs = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: pointer;

  a {
    text-decoration: none;
    color: var(--font-color);
    padding: 0;
    margin: 0;
  }

  :hover {
    background: rgba(0, 0, 0, 0.1);

    a {
      color: #fff;
      text-decoration: underline 0.15em;
      text-underline-offset: 0.2em;
    }
  }
`;
