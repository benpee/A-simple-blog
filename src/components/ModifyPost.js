import React from "react";

function ModifyPost({
  title,
  content,
  savePostTitletoState,
  savePostContentToState
  }) {
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="title"
          required
          size="39"
          defaultValue={title}
          onChange={savePostTitleToState}
        />
        <br />
        <br />
        <textarea
          placeholder="contents"
          cols="41"
          rows="8"
          required
          defaultValue={content}
          onChange={savePostContentToState}
        >
        </textarea>
        <br />
        <br />
        <button onClick={updatePost}>Update Post</button>
      </form>
    </>
  );
}

export default ModifyPost