import React, {
  ChangeEvent,
  ChangeEventHandler,
  useEffect,
  useState,
} from "react";

export type ProfileStatusType = {
  reduxStatus: any;
  updateStatusThunkCreator: (status: string) => void;
};

type StateType = {
  editMode: boolean;
  status: string;
};

const ProfileStatusWithHooks = (props: ProfileStatusType) => {
  let [editMode, setEditMode] = useState(true);
  let [status, setStatus] = useState(props.reduxStatus);

  useEffect(() => {
    setStatus(props.reduxStatus);
  }, [props.reduxStatus]);

  const activateEditMode = () => {
    setEditMode(false);
  };
  const deactivateEditMode = () => {
    setEditMode(true);
    props.updateStatusThunkCreator(status);
  };
  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value);
  };
  return (
    <div>
      {editMode ? (
        <div>
          <span onDoubleClick={activateEditMode}>
            {props.reduxStatus || "----"}
          </span>
        </div>
      ) : (
        <div>
          <input
            onChange={onStatusChange}
            autoFocus={true}
            onBlur={deactivateEditMode}
            value={status}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
