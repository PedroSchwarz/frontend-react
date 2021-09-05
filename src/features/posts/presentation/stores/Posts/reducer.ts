import { Post } from "../../../domain/entities/Post";
import * as Types from "./types";

export type POSTS_STATE = {
  posts: Post[];
}

const INTIAL_STATE: POSTS_STATE = {
  posts: [],
};

export default function (state = INTIAL_STATE, action: any): POSTS_STATE {
  const { type, payload } = action;

  switch (type) {
    /**
     * SET_POSTS
     *
     * handle SET_POSTS action
     *
     */
    case Types.SET_POSTS:
      return { ...state, posts: payload.posts };

    /**
     * DEFAULT
     *
     * handle default action
     *
     */
    default:
      return { ...state };
  }
}
