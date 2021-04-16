import React from "react";
import Preloader from "../../Common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";

export type ProfileStatusType = {
  status: any;
};

class ProfileStatus extends React.Component<ProfileStatusType, {}> {
  state = {
    editMode: true,
  };
  activateEditMode() {
    this.setState({ editMode: false });
  }
  deActivateEditMode() {
    this.setState({ editMode: true });
  }
  render() {
    return (
      <div>
        {this.state.editMode ? (
          <div>
            <span onDoubleClick={this.activateEditMode.bind(this)}>
              {this.props.status}
            </span>
          </div>
        ) : (
          <div>
            <input autoFocus onBlur={this.deActivateEditMode.bind(this)} value={this.props.status} />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
