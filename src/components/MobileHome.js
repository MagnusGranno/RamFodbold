import React, { useState, UseEffect } from 'react';
// Components
import MobileHeader from './MobileHeader';
import MobileMenu from './MobileMenu';

const MobileHome = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <MobileHeader checked={checked} setChecked={setChecked} />
      {checked && <MobileMenu />}
    </div>
  );
};

export default MobileHome;
