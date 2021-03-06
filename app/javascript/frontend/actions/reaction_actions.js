import * as APIUtil from '../util/reaction_api_util';

export const RECEIVE_REACTION = "RECEIVE_REACTION";

// sync action creators

export const receiveReaction = reaction => ({
  type: RECEIVE_REACTION,
  reaction
});

// async action creators

// Send a like or dislike (or remove a like/dislike) to the backend
export const createReaction = reaction => dispatch => {
  return APIUtil.postReaction(reaction).then(
    reaction => dispatch(receiveReaction(reaction))
  );
};