import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from "classnames";

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import NoSsr from '@material-ui/core/NoSsr';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';


import navTabsStyle from "assets/jss/material-kit-react/components/navTabsStyle";

import VideoList from "components/VideoList/VideoList.jsx";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};


const styles = theme => ({

});

class NavTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <NoSsr>
        <div className={classes.root}>
          <AppBar position="static" className={classes.appBar}>
            <Tabs fullWidth value={value} onChange={this.handleChange}>
              <Tab label="Elements" />
              <Tab label="Wokouts"  />
              <Tab label="Articles" />
            </Tabs>
          </AppBar>
          {value === 0 && <TabContainer><VideoList /></TabContainer>}
          {value === 1 && <TabContainer>Complete Wokouts</TabContainer>}
          {value === 2 && <TabContainer>Articles</TabContainer>}
        </div>
      </NoSsr>
    );
  }
}

NavTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(navTabsStyle)(NavTabs);
