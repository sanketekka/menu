import Button from "@enact/moonstone/Button";
import kind from "@enact/core/kind";
import { Panel, Header } from "@enact/moonstone/Panels";
import React, { Component } from "react";
//newer imports
import Layout from "@enact/ui/Layout";
import { Cell } from "@enact/ui/Layout";

class MainPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };
  DecreaseItem = () => {
    if (this.state.clicks > 0) this.setState({ clicks: this.state.clicks - 1 });
  };
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  };

  render(props) {
    return (
      <div {...props}>
        <Panel>
          <Layout align="center">
            <Cell component="label" size="75%">
              {this.props.name}
            </Cell>
            <Cell align="right">
              <Button small onClick={this.IncrementItem}>
                +
              </Button>
            </Cell>
            <Cell component="label" size="3%">
              {this.state.clicks}
            </Cell>
            <Cell>
              <Button small onClick={this.DecreaseItem}>
                -
              </Button>
            </Cell>
          </Layout>
        </Panel>
      </div>
    );
  }
}
export default MainPanel;
