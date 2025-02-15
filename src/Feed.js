import React from 'react'
import Post from './Post'  //#6th to do

const Feed = ({posts}) => {
  return (
    < >
        {posts.map (post=>(
            <Post key={post.id} post={post}/> /* Each post object in the posts array is passed to the Post component iteratively */
        ))}
 
    </ >
  )
}

export default Feed