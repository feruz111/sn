import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route } from "react-router-dom";
import News from "./components/News/News";
import UsersContainer from "./components/Users/UsersContainer";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

function App() {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
        <Route path="/news" component={News} />
        <Route path="/users" component={UsersContainer} />
        <Route path="/settings" component={Settings} />
      </div>
    </div>
  );
}
  
export default App;
