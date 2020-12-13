import React from 'react';

import HorizontalNav5 from '../components/horizontal-navs/HorizontalNav5';
import SignInCustom1 from '../components-custom/SignInCustom1';
import StructureContainer from '../components/__structures/StructureContainer';
import Footer1 from '../components/footers/Footer1';

export default function Login() {
  return (
    <React.Fragment>
      <HorizontalNav5
        content={{
          brand: {
            text: 'Dni Fruits',
            image: 'mui-assets/img/logo-pied-piper-white.png',
            width: '120',
          },
          'brand-small': {
            text: 'Dni Fruits',
            image: 'mui-assets/img/logo-pied-piper-white-icon.png',
            width: '32',
          },
          link1: 'Home',
          link2: 'Product',
          link4: 'Contact',
        }}
      />

      <SignInCustom1 />

      <StructureContainer
        bucket1={[
          <Footer1
            content={{
              brand: {
                text: 'Dni Fruits',
                image: 'mui-assets/img/logo-pied-piper-grey.png',
                width: '120',
              },
              link1: 'Home',
              link2: 'Product',
              link4: 'Contact',
            }}
          />,
        ]}
      />
    </React.Fragment>
  );
}

