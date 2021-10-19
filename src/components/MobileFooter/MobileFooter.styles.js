import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #1d3557;
  width: 100%;
  height: 250px;
  max-width: 1280px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  margin: 0;
  border: none;
`;

export const Content = styled.div`
  border: none;
  width: 100%;
  max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Text = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #fff;
  border: none;

  line-height: 1.5rem;
  h3 {
    text-shadow: 1px 2px 2px black;
    margin: 0 10px 0 10px;
  }
  p {
    font-size: var(--fontSuperSmall);
    font-weight: 400;
    margin: 10px;

    letter-spacing: 2px;
  }
`;
