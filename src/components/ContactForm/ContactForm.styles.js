import styled, { css } from 'styled-components';
const sharedStyles = css`
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
`;

export const Wrapper = styled.div`
  height: 100vh;
`;
export const StyledFormWrapper = styled.div`
  font-family: 'Roboto', sans-serif;
  display: flex;
  justify-content: center;
  font-size: 1.2rem;
  padding: 20px;
  box-sizing: border-box;
  margin: 0;
  margin-bottom: 0;
`;

export const StyledForm = styled.form`
  width: 100%;
  height: 100%;
  max-width: 700px;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);

  h2 {
    margin: 2rem 0;
  }
  margin-bottom: 0;
`;

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  ${sharedStyles}
`;

export const StyledTextArea = styled.textarea`
  background-color: #eee;
  width: 100%;
  min-height: 100px;
  box-sizing: border-box;
  resize: none;
  ${sharedStyles}
  padding: 10px;
  font-size: 1rem;

  @media (min-width: 860px) {
    min-height: 150px;
  }
`;

export const StyledButton = styled.button`
  display: block;
  background-color: var(--primary-color);
  color: #fff;
  font-size: 1.2rem;
  border: 0;
  border-radius: 5px;
  height: 50px;
  width: 100%;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;

  @media (max-width: 860px) {
    width: 100%;
    height: 60px;
    margin-bottom: 0;
  }
`;

export const StyledError = styled.div`
  color: red;
  font-weight: 800;
  margin: 0 0 40px 0;
`;
