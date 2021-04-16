import React, { ChangeEvent } from "react";

export type ProfileStatusType = {
  reduxStatus: any;
  updateStatusThunkCreator: (status: string) => void;
};

type StateType = {
  editMode: boolean;
  status: string;
};

class ProfileStatus extends React.Component<ProfileStatusType, StateType> {
  state = {
    editMode: true,
    status: this.props.reduxStatus,
  };
  activateEditMode() {
    this.setState({ editMode: false });
  }
  deActivateEditMode() {
    this.setState({ editMode: true });
    this.props.updateStatusThunkCreator(this.state.status);
  }
  onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };

  componentDidUpdate(prevProps: ProfileStatusType, prevState: StateType) {
    if (prevProps.reduxStatus !== this.props.reduxStatus) {
      this.setState({
        status: this.props.reduxStatus,
      });
    }
  }
  render() {
    return (
      <div>
        {this.state.editMode ? (
          <div>
            <span onDoubleClick={this.activateEditMode.bind(this)}>
              {this.props.reduxStatus || "----"}
            </span>
          </div>
        ) : (
          <div>
            <input
              onChange={this.onStatusChange}
              autoFocus
              onBlur={this.deActivateEditMode.bind(this)}
              value={this.state.status}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
