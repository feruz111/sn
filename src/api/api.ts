import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "5b802dfc-8175-4671-99bf-e30ddb894d16",
  },
});

export const usersAPI = {
  getUsers(currentPage: number = 1, pageSize: number = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  follow(userId: number) {
    return instance.post(
      `follow/${userId}`
    );
  },
  unFollow(userId: number) {
    return instance.delete(
      `follow/${userId}`
    );
  },
  profileAPI(userId: string) {
    return instance.get(`profile/${userId}`).then((response) => response.data);
  },
};

export const authAPI = {
  authMeAPI() {
    return instance.get(`auth/me`).then((response) => response.data);
  },
};
