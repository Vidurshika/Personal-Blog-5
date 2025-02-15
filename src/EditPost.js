import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { useStoreState ,useStoreActions} from 'easy-peasy';
import {format} from 'date-fns';


const EditPost =()=>{

  const editTitle = useStoreState((state) => state.editTitle);
  const editBody  = useStoreState((state) => state.editBody);

  const editPost      = useStoreActions((actions) => actions.editPost);
  const setEditTitle  = useStoreActions((actions) => actions.setEditTitle);
  const setEditBody   = useStoreActions((actions) => actions.setEditBody);

  const navigate = useNavigate();
  const{id}      = useParams(); 

  const getPostById = useStoreState((state) => state.getPostById);
  const post        = getPostById(id);

  useEffect(()=>{
    if(post){
        setEditTitle(post.title);
        setEditBody(post.body);

    }
  },[post,setEditTitle,setEditBody])

  const handleEdit=(id) =>{  /* previously async(id) ; now it is removed as thunk  */
    const datetime = format(new Date(), 'MMM dd, yyyy pp');
    const updatedPost = {id, title: editTitle, datetime, body: editBody}  
    editPost(updatedPost);
    navigate(`/post/${id}`); 
  }
  

  return ( /* directly from NewPost return  */
    <main className='NewPost'>
      {editTitle && /* If editTitle exists, the edit form is displayed.&&? Ensures the form only appears if a post exists. */
      <> {/* without these<>; && and {} would give errors */}
        <h2>Edit Post</h2>
        <form className='newPostForm' onSubmit={(e)=>e.preventDefault()}>
            <label htmlFor="postTitle">Title:</label> 
            <input
                id="postTitle"
                type="text"
                required
                value={editTitle}
                onChange={(e)=> setEditTitle(e.target.value)} /* Updates editTitle when user types (onChange).*/
            />
            <label htmlFor='postBody'>Post:</label>
            <textarea
                id="postBody"
                required
                value={editBody}
                onChange={(e) => setEditBody(e.target.value)}
            />
            <button type="button" onClick={()=> handleEdit(post.id)}>Submit</button> 
        </form>
      </>
     }
     {/* If editTitle is empty, it means:
         The user tried to edit a non-existent post.(when we are going to edit a post means already has a title and abody)
         Example: If the URL is /post/99 but there are only 4 posts. */}
     {!editTitle && 
                 <>
                     <h2>Post Not Found</h2>
                     <p>Well, That's disappointing</p>
                     <p>
                       <Link to ='/' >Visit Our Homepage</Link> {/* if only 4 posts and url=http://localhost:3000/post/5 then you will see this */}
                     </p>
                 </>
     }
    </main>
  )
}

export default EditPost