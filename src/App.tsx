import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { compose } from "redux";
import "./App.css";
import Preloader from "./components/Common/Preloader/Preloader";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";
import { HeaderContainerWrap } from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import { WithProfileContainer } from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import { initializeApp } from "./redux/app-reducer";
import { RootStoreType } from "./redux/store";

type PropsType = {
  initializeApp: () => void;
  initialized: boolean;
};

class App extends React.Component<PropsType> {
  catchAllUnHandledErrors = () => {
    alert("some error");
  };
  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnHandledErrors);
  }
  componentWillUnmount() {
    window.removeEventListener(
      "unhandledrejection",
      this.catchAllUnHandledErrors
    );
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainerWrap />
        <Navbar />
        <div className="app-wrapper-content">
          <Switch>
            <Route exact path="/" render={() => <Redirect to={"/profile"} />} />
            <Route path="/dialogs" render={() => <DialogsContainer />} />
            <Route
              path="/profile/:userId?"
              render={() => <WithProfileContainer />}
            />
            <Route path="/users" component={UsersContainer} />
            <Route path="/login" component={Login} />
            <Route path="*" render={() => <h1>404 NOT FOUND</h1>} />
          </Switch>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state: RootStoreType) => {
  return { initialized: state.app.initialized };
};

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);
//some changes