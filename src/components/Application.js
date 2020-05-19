import React from 'react';
import PureComponentExample from "@components/PureComponent";
import ComponentExample from "@components/Component";
import FunctionalComponent from "@components/FunctionalComponent";
import CreateElement from "@components/CreateElement";

class Application extends React.Component {
  render() {
    return (
      <>
        <CreateElement/>
        <ComponentExample/>
        <PureComponentExample/>
        <FunctionalComponent/>
      </>
    )
  }
}

export default Application;
