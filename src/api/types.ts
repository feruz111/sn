export type ProfilePutTypes = {
  userId?: number;
  lookingForAJob?: boolean;
  lookingForAJobDescription?: string;
  fullName?: string;
  contacts?: Contacts;
};

type Contacts = {
  github: string;
  vk: string;
  facebook: string;
  instagram: string;
  twitter: string;
  website: string;
  youtube: string;
  mainLink: string;
};
export type loginAuthPostType = {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha: boolean;
};
