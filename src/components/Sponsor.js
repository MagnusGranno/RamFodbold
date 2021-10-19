import React, { useState } from 'react';
// Components
import Header from './Header';
import MobileHeader from './MobileHeader';
import Footer from './Footer';
import MobileFooter from './MobileFooter';
import MobileMenu from './MobileMenu';

const Sponsor = ({ width }) => {
  const myWidth = width;
  const [checked, setChecked] = useState(false);
  return (
    <>
      {myWidth >= 768 ? (
        <Header />
      ) : (
        <MobileHeader checked={checked} setChecked={setChecked} />
      )}
      {checked ? (
        <MobileMenu />
      ) : (
        <div>
          <h1>TODO</h1>
        </div>
      )}
      {myWidth >= 768 ? <Footer /> : <MobileFooter />}
    </>
  );
};

export default Sponsor;
