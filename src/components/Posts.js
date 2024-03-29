﻿import React from "react";

function Posts({
  title,
  content,
  id,
  editPost,
  deletePost
  }) {
  return (
    <>
      <section>
        <h3>{title}</h3>
        <p>{content}</p>
        <button onClick={() => editPost(id)}>Edit</button>
        <button onClick={() => deletePost(id)>
          Delete
        </button>
      <section>
    </>
  );
}

export default Posts