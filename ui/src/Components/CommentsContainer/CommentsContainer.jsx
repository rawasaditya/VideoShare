import axios from "axios";
import React, { useEffect, useState } from "react";
import CommentInput from "../CommentInput/CommentInput";
import Comments from "../Comments/Comments";

const CommentsContainer = ({ videoId }) => {
  const [comments, setcomments] = useState([]);
  const fetchComments = async () => {
    const commentsRes = await axios(`comments/${videoId}`);
    setcomments(commentsRes.data);
  };
  useEffect(() => {
    try {
      fetchComments();
    } catch (err) {
      console.error(err);
    }
  }, [videoId]);
  return (
    <>
      <CommentInput setcomments={setcomments} videoId={videoId} />
      {comments.length ? comments.map(comment=> <Comments comment={comment} key={comment._id}/>) : ""}
    </>
  );
};

export default CommentsContainer;
