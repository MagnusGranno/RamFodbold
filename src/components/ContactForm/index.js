import React, { useState } from 'react';
// Styles
import {
  StyledFormWrapper,
  StyledForm,
  StyledInput,
  StyledTextArea,
  StyledButton,
  StyledError,
  Wrapper,
} from './ContactForm.styles';

const ContactForm = () => {
  const initialState = {
    navn: '',
    email: '',
    besked: '',
  };
  const [state, setState] = useState(initialState);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    for (let key in state) {
      if (state[key] === '') {
        setError(`${key} skal være udfyldt`);
      }
    }
    setError('');
    setState(initialState);
  };

  const handleInput = (e) => {
    const inputName = e.currentTarget.name;
    const value = e.currentTarget.value;

    setState((prev) => ({ ...prev, [inputName]: value }));
  };

  return (
    <Wrapper>
      <StyledFormWrapper>
        <StyledForm onSubmit={handleSubmit}>
          <h2>Kontakt Os</h2>
          <label htmlFor="navn">Navn</label>
          <StyledInput
            type="text"
            name="navn"
            value={state.navn}
            onChange={handleInput}
          />
          <label htmlFor="email">Email</label>
          <StyledInput
            type="email"
            name="email"
            value={state.email}
            onChange={handleInput}
          />
          <label htmlFor="besked">Besked</label>
          <StyledTextArea
            name="besked"
            value={state.besked}
            onChange={handleInput}
          />
          {error && (
            <StyledError>
              <p>{error}</p>
            </StyledError>
          )}
          <StyledButton type="submit">Send Besked</StyledButton>
        </StyledForm>
      </StyledFormWrapper>
    </Wrapper>
  );
};

export default ContactForm;
