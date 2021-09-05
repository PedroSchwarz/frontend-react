import * as Types from "./types";

/**
 * setPosts
 *
 * handle SET_POSTS actions
 *
 * @param payload
 */
export function setPosts(payload: any) {
  return {
    type: Types.SET_POSTS,
    payload,
  };
}