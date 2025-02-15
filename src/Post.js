import React from 'react';
import { Link } from 'react-router-dom';  //#7th to do

const Post = ({ post }) => {
  return (
    <article className='post'>

        {/* to={/post/${post.id}}: Creates a link to a dynamic route based on the id of the post. For example, if post.id is 3, this will navigate to /post/3 when clicked.
            Purpose: Clicking the link navigates the user to the detailed page for the specific post. h2 and p is the link*/}
      
      <Link to={`/post/${post.id}`}>  {/* back tick */}
        <h2>{post.title}</h2>
        <p className='postDate'>{post.datetime}</p>
      </Link>

      {/* When a user clicks on this <Link>, React Router navigates to the corresponding URL, like /post/3   
          and React Router matches this URL (/post/3) with the route /post/:id defined in your App.js then 🔴 Postpage 🔴 component is rendered*/}
      
      <p className="postBody">
           {
            (post.body).length<=25
                ? post.body
                : `${(post.body).slice(0,25)}...`
           }
           
        {/* The body of the post (post.body) is displayed, but it is truncated if it is longer than 25 characters:
           If the body length is ≤ 25: Display the full text.
           If the body length is > 25: Display the first 25 characters followed by ... */}
      </p>
    </article>
  );
};

export default Post;
