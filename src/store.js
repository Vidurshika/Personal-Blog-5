import {createStore,action,thunk,computed } from "easy-peasy";  /* createStore() → Creates the global store.
                                                                   action → Used to modify state (synchronous).
                                                                   thunk → Used for async operations (like API calls).
                                                                   computed → Used for derived values (like post count). */
import api from './api/posts';

export default createStore({  /* all states and actions stated in DataContext and other components.
                                 But isLoading and fetchError are omitted */

    /* below 2 things are used to get const [posts,setPosts] */           
    posts:[],
    setPosts : action((state,payload) => {
        state.posts=payload;   /* setPosts(payload) → Updates the posts array when new data is fetched. */
    }),
    postTitle:'',
    setPostTitle: action((state,payload)=> {
        state.postTitle=payload;
    }),
    postBody:'',
    setPostBody: action((state,payload)=> {
        state.postBody=payload;
    }),
    editTitle:'',
    setEditTitle: action((state,payload)=> {
        state.editTitle=payload;
    }),
    editBody:'',
    setEditBody: action((state,payload)=> {
        state.editBody=payload;
    }),
    search:'',
    setSearch: action((state,payload)=> {
        state.search=payload;
    }),
    searchResults:'',
    setSearchResults: action((state,payload)=> {
        state.searchResults=payload;
    }),
    postCount:computed((state)=>state.posts.length),

    /* The getPostById computed property will return a function, and when that function is called with an id, it will return the post object that matches the given ID  */
    getPostById: computed((state) => {
        return (id) => state.posts.find(post => (post.id).toString() === id)
    }),

    /* thunk= without thunk, async can not be used inside the store in Easy Peasy*/
    savePost: thunk(async (actions , newPost ,helpers) =>{  /* savePost(newPost); */

        const {posts} =helpers.getState();  /* thunks provide- helpers.getState() gives the entire state of the store
                                               {posts}=Give the posts property from the object returned by helpers.getState(). only posts stored in store*/
        /* this is from NewPost component */
        try {
            const response = await api.post('/posts', newPost);  /* async is used as await kw is here */
            const allPosts = [...posts, response.data]; 
            actions.setPosts(allPosts);   /* just setPosts will not access the setPosts in STORE ;actions .then call */
            actions.setPostTitle(''); 
            actions.setPostBody('');
            /* navigate('/'); hooks can not be used here now */
        } catch (err) { 
            console.log(`Error: ${err.message}`);
        }
    }),
    deletePost: thunk(async (actions,id,helpers)=>{  /* called like this =deletePost(id); */
        const{posts} =helpers.getState();
        /* below from PostPage component */
        try{
            await api.delete(`/posts/${id}`); 
            const postList=posts.filter(post=>post.id !== id); 
            actions.setPosts(postList);
            /* navigate('/');  */
        }
        catch (err){
            console.log(`Error: ${err.message}`);
        }

    }),
    editPost: thunk(async (actions,updatedPost,helpers)=> {
        const { posts } = helpers.getState();
        const { id } = updatedPost;
        /* from editPost compo */
         try{
            const response = await api.put(`/posts/${id}`, updatedPost) 
            actions.setPosts(posts.map(post => post.id === id ? {...response.data} : post)); 
            actions.setEditTitle('');   /*  Clears the input fields after editing. */
            actions.setEditBody('');
            /* navigate('/'); */
        }
        catch (err){
            console.log(`Error: ${err.message}`);
        }

    })


})