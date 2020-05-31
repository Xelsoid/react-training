import React from 'react';
import Header from "@components/Header";
import Main from "@components/Main";
import Footer from "@components/Footer";
import '@styles/reset.css';
import '@styles/colours.scss';
import '@styles/styles.scss';

class Application extends React.Component {
  render() {
    return (
      <>
        <Header/>
        <Main/>
        <Footer/>
      </>
    )
  }
}

export default Application;
