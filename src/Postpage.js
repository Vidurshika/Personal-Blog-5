import React from 'react'
import  {useParams,Link} from "react-router-dom";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { useStoreState ,useStoreActions} from 'easy-peasy';
/* import api from './api/posts'; --no need as thunk is used */

/* @8 to do */

const Postpage = () => {
  const navigate    = useNavigate();
  const {id}        = useParams();  // this id is taken from the url and it is not post.id
  const deletePost  = useStoreActions((actions) => actions.deletePost);
  const getPostById = useStoreState((state) => state.getPostById);
  const post        = getPostById(id);
    
  const handleDelete=(id)=>{  /* previously async(id) ; now it is removed as thunk is in deletePost */
     deletePost(id); /* this is in store */
     navigate(`/`); // Navigate to the home page after deletion
  }
 
  return (
    <main className='PostPage'>
      <article className='post'>
        {post && 
          <>
              <h2>{post.title}</h2>
              <p className ='postDate'>{post.datetime}</p>
              <p className ='postBody'>{post.body}</p>
              <Link to={`/edit/${post.id}`}><button className='editButton'>Edit Post</button></Link>
              <button className='deleteButton' onClick={()=> handleDelete(post.id)}>
                Delete Post
              </button>
          </>
        
        }
        {!post && 
            <>
                <h2>Post Not Found</h2>
                <p>Well, That's disappointing</p>
                <p>
                  <Link to ='/' >Visit Our Homepage</Link> {/* if only 4 posts and url=http://localhost:3000/post/5 then you will see this */}
                </p>
            </>
        }
      </article>
    </main>
  )
}
export default Postpage;