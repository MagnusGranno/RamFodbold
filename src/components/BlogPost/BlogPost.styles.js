import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 860px;

  /* border-bottom: 1px solid black;
    border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  box-shadow: 2px 5px 1px black; */
`;

export const Content = styled.div``;

export const Text = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
  max-width: 860px;
  margin-bottom: 2rem;
  h1 {
    margin: 2rem 0;
  }
  p {
    line-height: 1.5;
  }

  hr {
    margin: 2rem auto;
    width: 75%;
    border: 1px solid black;
  }
  img {
    margin: 1rem 0;
    max-width: 860px;
    object-fit: cover;
    height: 100%;
    width: 100%;
  }

  @media (max-width: 860px) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;

    img {
      width: 100%;
    }
  }
`;
