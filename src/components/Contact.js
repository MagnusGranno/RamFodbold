import React, { useState } from 'react';

// Components
import ContactForm from './ContactForm';
import MobileHeader from './MobileHeader';
import Header from './Header';
import MobileFooter from './MobileFooter';
import Footer from './Footer';
import MobileMenu from './MobileMenu';
const Contact = ({ width }) => {
  const myWidth = width;
  const [checked, setChecked] = useState(false);
  return (
    <>
      {myWidth >= 768 ? (
        <Header />
      ) : (
        <MobileHeader checked={checked} setChecked={setChecked} />
      )}
      {checked ? <MobileMenu /> : <ContactForm />}
      {myWidth >= 768 ? <Footer /> : <MobileFooter />}
    </>
  );
};

export default Contact;
