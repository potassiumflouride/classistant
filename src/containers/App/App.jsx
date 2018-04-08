import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import { withStyles } from "material-ui";

import { Header, Footer, Sidebar } from "components";

import appRoutes from "routes/app.jsx";

import appStyle from "variables/styles/appStyle.jsx";

import image from "assets/img/sidebar-2.jpg";
import logo from "assets/img/reactlogo.png";

import firebase from 'firebase';

const switchRoutes = (
  <Switch>
    {appRoutes.map((prop, key) => {
      if (prop.redirect)
        return <Redirect from={prop.path} to={prop.to} key={key} />;
      return <Route path={prop.path} component={prop.component} key={key} />;
    })}
  </Switch>
);

class App extends React.Component {
  constructor(props){
    super(props);

    var config = {
<<<<<<< HEAD
      apiKey: "AIzaSyCHaMYnbjPtuwvWi9eFA35WEIrLmYRLfTI",
      authDomain: "bt3103-project.firebaseapp.com",
      databaseURL: "https://bt3103-project.firebaseio.com",
      projectId: "bt3103-project",
      storageBucket: "bt3103-project.appspot.com",
      messagingSenderId: "64444378799"
    };
    firebase.initializeApp(config);
=======
      apiKey: "AIzaSyDvF966Qymq1ktNm39fWqo8CY42GSA6UnQ",
      authDomain: "friendlychat-af4c8.firebaseapp.com",
      databaseURL: "https://friendlychat-af4c8.firebaseio.com",
      projectId: "friendlychat-af4c8",
      storageBucket: "friendlychat-af4c8.appspot.com",
      messagingSenderId: "919303787426"
    };

    if (!firebase.apps.length) {
        firebase.initializeApp(config);
    }
>>>>>>> fdaa376e8626e8f8a6ad6b81da3a9258d357c791
  }

  state = {
    mobileOpen: false
  };
  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };
  getRoute() {
    return this.props.location.pathname !== "/maps";
  }
  componentDidMount() {
    if(navigator.platform.indexOf('Win') > -1){
      // eslint-disable-next-line
      const ps = new PerfectScrollbar(this.refs.mainPanel);
    }
  }
  componentDidUpdate() {
    this.refs.mainPanel.scrollTop = 0;
  }

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div className={classes.wrapper}>
        <Sidebar
          routes={appRoutes}
          logoText={"CLAssistant"}
          logo={logo}
          image={image}
          handleDrawerToggle={this.handleDrawerToggle}
          open={this.state.mobileOpen}
          color="blue"
          {...rest}
        />
        <div className={classes.mainPanel} ref="mainPanel">
          <Header
            routes={appRoutes}
            handleDrawerToggle={this.handleDrawerToggle}
            {...rest}
          />
          {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
          {this.getRoute() ? (
            <div className={classes.content}>
              <div className={classes.container}>{switchRoutes}</div>
            </div>
          ) : (
            <div className={classes.map}>{switchRoutes}</div>
          )}
          {this.getRoute() ? <Footer /> : null}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(appStyle)(App);
