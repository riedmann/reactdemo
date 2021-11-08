import React from "react";

import "./App.css";
import Content from "./components/Content";
import Menu from "./components/Menus";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { personId: 1 };
  }

  receiveInfoFromSidebar() {
    alert("sidebar");
  }

  informMe = (id) => {
    this.setState({
      personId: id,
    });
  };

  render() {
    return (
      <div className="App">
        <Menu heading="CodingCampus" onTouch={this.informMe} />
        <Content id={this.state.personId} />
      </div>
    );
  }
}

export default App;
