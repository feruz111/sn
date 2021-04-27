import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, withRouter } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import WithProfileContainer from "./components/Profile/ProfileContainer";
import Login from "./components/Login/Login";
import { HeaderContainerWrap } from "./components/Header/HeaderContainer";
import React from "react";
import { connect } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import { compose } from "redux";
import { RootStoreType } from "./redux/redux-store";
import Preloader from "./components/Common/Preloader/Preloader";

class App extends React.Component<any, any> {
  //any
  componentDidMount() {
    this.props.initializeApp();
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
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route
            path="/profile/:userId?"
            render={() => <WithProfileContainer />}
          />
          <Route path="/users" component={UsersContainer} />
          <Route path="/login" component={Login} />
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
