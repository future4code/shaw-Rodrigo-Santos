import React from "react";
import { useProtectedPage } from "../../Hooks/useProtectedPage";

const Feed = () => {
  useProtectedPage()
  return <div>Feed</div>;
};
export default Feed;
