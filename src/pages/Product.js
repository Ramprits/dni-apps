import React from 'react';

import HorizontalNav5 from '../components/horizontal-navs/HorizontalNav5';
import StructureContainer from '../components/__structures/StructureContainer';
import Portfolio1 from '../components/portfolio/Portfolio1';
import Footer1 from '../components/footers/Footer1';

export default function Product() {
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

      <StructureContainer
        bucket1={[
          <Portfolio1 content={null} />,

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

