import React from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useParams } from "react-router-dom";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";

const PostPage = () => {
  useProtectedPage();
  const params = useParams();
  const postDetail = useRequestData(
    [{}],
    `${BASE_URL}/posts/${params.id}/comments`
  );
  console.log(postDetail);

  return (
    <div>
      <h1>PostPage</h1>
      <h2>{postDetail && postDetail[0] && postDetail[0].body}</h2>
    </div>
  );
};

export default PostPage;
