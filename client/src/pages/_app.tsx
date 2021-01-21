import React from 'react';
import { AppProps } from 'next/app';
import Navbar from 'components/Navbar';
import 'tippy.js/dist/tippy.css';
import '../../styles/index.css';
import Footer from 'components/Footer';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </>
);

export default MyApp;
