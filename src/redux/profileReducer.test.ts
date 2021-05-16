import {
  addPostActionCreator,
  deletePost,
  profileReducer,
} from "./profile-reducer";

let state: any = {
  posts: [
    { id: 1, message: "Hi, how are you", likesCount: 12 },
    { id: 2, message: "it's first", likesCount: 24 },
    { id: 3, message: "yo" },
    { id: 4, message: "yo" },
    { id: 5, message: "yo" },
  ],
};

it("new post should be added", () => {
  //1. init state
  let action = addPostActionCreator("it kamas");

  //2. action
  let newState = profileReducer(state, action);

  //3. result
  expect(newState.posts.length).toBe(6);
});

it("new message should be added", () => {
  //1. init state
  let action = addPostActionCreator("it kamas");

  //2. action
  let newState = profileReducer(state, action);

  //3. result
  expect(newState.posts[5].message).toBe("it kamas");
});
it("after deletion length of messages should be decremented ", () => {
  //1. init state
  let action = deletePost(1);

  //2. action
  let newState = profileReducer(state, action);

  //3. result
  expect(newState.posts.length).toBe(4);
});
it("after deletion length of messages should not change upon incorrect id", () => {
  //1. init state
  let action = deletePost(111);

  //2. action
  let newState = profileReducer(state, action);

  //3. result
  expect(newState.posts.length).toBe(5);
});
