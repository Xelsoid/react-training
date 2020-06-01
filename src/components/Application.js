import React from 'react';
import Header from '@components/Header';
import Main from '@components/Main';
import Footer from '@components/Footer';
import '@styles/reset.css';
import '@styles/colours.scss';
import '@styles/styles.scss';
import ErrorBoundary from '@components/ErrorBoundary';

const Application = () => (
  <ErrorBoundary>
    <Header />
    <Main />
    <Footer />
  </ErrorBoundary>
);

export default Application;
