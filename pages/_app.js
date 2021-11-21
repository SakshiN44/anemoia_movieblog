import React, {useEffect, useState} from 'react';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

import { Layout } from '../components';

import 'tailwindcss/tailwind.css';
import '../styles/global.scss';



function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
