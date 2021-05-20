import React from "react";
import s from "../ProfileInfo.module.css";

export const ProfileData = ({ profile, isOwner, goToEditMode }: any) => {
  const contacts = ["Facebook", "Website", "Github"];

  return (
    <div>
      {isOwner && (
        <button className={s.editSaveButton} onClick={goToEditMode}>
          Edit
        </button>
      )}
      <div>
        <b>Full name</b>: {profile.fullName}
      </div>
      <div>
        <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
      </div>
      {profile.lookingForAJob && (
        <div>
          <b>My professional skills</b>: {profile.lookingForAJobDescription}
        </div>
      )}
      <div>
        <b>About me</b>: {profile.aboutMe}
      </div>
      <div>
        <b>Contacts</b>:
        {contacts.map((key) => {
          return <Contact key={key} contactTitle={key} contactValue={"---"} />;
        })}
      </div>
    </div>
  );
};

const Contact = ({ contactTitle, contactValue }: any) => {
  return (
    <div className={s.contact}>
      <b>{contactTitle}</b>: {contactValue}
    </div>
  );
};
