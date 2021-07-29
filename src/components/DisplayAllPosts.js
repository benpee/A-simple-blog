import React, {useState, useRef} from "react";
import CreateNewpost from './CreateNewpost';
import Posts from './Posts';

function DisplayAllPosts() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [allPosts, setAllPosts] = useState([]);
  const [isCreateNewPost, setIsCreateNewPost] = useState(false);
  const [isModify, setIsModify] = useState(false);
  const [editPostId, setEditPostId] = useState("");

  const getTitle = useRef();
  const getContent = useRef();

  const savePost = (e) => {
    e.preventDefault();
    const id = Date.now();
    setAllPosts([...allPosts, {title, content, id}]);
    setTitle("");
    setContent("");
    getTitle.current.value = "";
    getContent.current.value = "";
    toggleCreateNewPost();
    console.log(allPosts);
  };

  const deletePost = id => {
    const modifiedPost = allPosts.filter(eachPost =>
      eachPost.id !== id);
    setAllPosts(modifiedPost);
  };

  const toggleModifyPostComponent = () => {
   setIsModify(!isModify);
  };

  const toggleCreateNewPost = () => {
    setIsCreateNewPost(!isCreateNewPost);
  };

  const editPost = id => {
    setEditPostId(id);
    toggleModifyPostComponent();
  };
  
  const savePostTitleToState = e => {
    setTitle(e.target.value);
    console.log(title);
  };

  const savePostContentToState = e => {
    setContent(e.target.value);
    console.log(content);
  };

  const updatePost = e => {
    e.preventDefault();
    const updatedPost = allPosts.map(eachPost => {
      if (eachPost.id === editPostId) {
        return {
          ...eachPost,
          title: title || eachPost.title,
          content: content || eachPost.content
        };
      }
      return eachPost
    });
    setAllPosts(updatedPost);
    toggleModifyPostComponent();
  };
  
  if (isCreateNewPost) {
    return (
      <>
        <CreateNewpost
          savePostTitleToState={savePostTitleToState}
          savePostContentToState={savePostContentToState}
          getContent={getContent}
          getTitle={getTitle}
          savePost={savePost}
        />
      </>
    );
   } else if (isModify) {
     const post = allPosts.find(post => post.id === postId);
     return (
       <ModifyPost
         title={post.title}
         content={post.content}
         updatePost={updatePost}
         savePostTitleToState={savePostTitleToState}
         savePostContentToState={savePostContentToState}
       />
     );
   }
   return (
     <>
       <h2>All Posts</h2>
       {!allPosts.length ? (
         <div>
           <h3>No Posts</h3>
         </div>
       ) : (
         allPosts.map(eachPost => 
           <Posts
             title={eachPost.title}
             content={eachPost.content}
             key={eachPost.id}
             id={eachPost.id}
             editPost={editPost}
             deletePost={deletePost}
           /> 
         );
       )}
       <Posts title={title} content={content} />
       <br />
       <br />
       <button onClick={toggleCreateNewPost}>
         Create New
       </button>
     </>
   );
}

export default DisplayAllPosts