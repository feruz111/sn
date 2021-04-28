import React from "react";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";
import { compose } from "redux";
import "./App.css";
import Preloader from "./components/Common/Preloader/Preloader";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { HeaderContainerWrap } from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import WithProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import { initializeApp } from "./redux/app-reducer";
import { RootStoreType } from "./redux/redux-store";

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
