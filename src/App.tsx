import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import WithProfileContainer from "./components/Profile/ProfileContainer";
import Login from "./components/Login/Login";
import { HeaderContainerWrap } from "./components/Header/HeaderContainer";

function App() {
  return (
    <div className="app-wrapper">
      <HeaderContainerWrap />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/profile/:userId?" render={() => <WithProfileContainer />} />
        <Route path="/users" component={UsersContainer} />
        <Route path="/login" component={Login} />
      </div>
    </div>
  );
}
  
export default App;
