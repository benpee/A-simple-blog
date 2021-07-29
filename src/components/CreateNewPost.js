import React from "react";

function CreateNewPost({
  savePostContentToState,
  savePostTitleToState,
  getTitle,
  getContent,
  savePost
  }) {
  
  return (
    <>
      <form onSubmit={savePost}>
        <h1>Create New Post</h1>
        <input
          type="text"
          placeholder="title"
          size="39"
          required
          onChange={savePostTitleToState}
          ref={getTitle}
        />
        <br />
        <br />
        <textarea
          placeholder="contents"
          rows="8"
          cols="41"
          required
          onChange={savePostContentToState}
          ref={getContent}
        >
        </textarea>
        <br />
        <br />
        <button>Save Post</button>
      </form>
    </>
  )
}