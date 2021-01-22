import React from 'react';
import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'tippy.js/dist/tippy.css';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import SEO from '../next-seo.config';
import '../../styles/index.css';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <DefaultSeo {...SEO} />
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </>
);

export default MyApp;
