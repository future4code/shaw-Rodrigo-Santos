enum POST_TYPES {
  NORMAL = "normal",
  EVENT = "event",
}

export type createPostDTO = {

  photo: string;
  description: string;
  type: POST_TYPES;

};
