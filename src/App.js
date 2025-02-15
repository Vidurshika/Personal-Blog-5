import "./App.css"; 
import Header from "./Header";
import Nav from './Nav';
import Footer from "./Footer";
import Home from "./Home";
import NewPost from "./NewPost";
import Postpage from "./Postpage";
import About from "./About";
import Missing from "./Missing";
import EditPost from "./EditPost";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter
import { useEffect } from "react";
import useAxiosFetch from "./hooks/useAxiosFetch";
/* import { DataProvider } from "./context/DataContext - removed as Store will be used */
import { useStoreActions } from "easy-peasy";  
/* When you use the useStoreState or useStoreActions hooks inside your components, 
   they will interact with the store that is provided to the StoreProvider in your index.js file. */

function App() {

  const setPosts = useStoreActions((actions) => actions.setPosts); /* This is a function that gets all the actions from the store and returns the specific action (setPosts) you want to use */
                                                                   /*  importing the setPosts action from the store into your component and binding it to the variable setPosts in the component's scope. */
  const {data , fetchError, isLoading} =useAxiosFetch('http://localhost:3500/posts')
  useEffect(()=>{
    setPosts(data);  
  },[data])
 
  return (
    <div className="App">
        <Header
          title="My Blog"/>
          <Nav />  
          <Routes> 
            <Route path="/" element={
              <Home
               isLoading={isLoading}
               fetchError={fetchError}
              />}
            /> 
            <Route path="/post" element={
              <NewPost/>} 
            />
            <Route path="/edit/:id" element={
              <EditPost/>} 
            />
            <Route path="/post/:id" element={
              <Postpage/>} 
            />  
            <Route path="/about" element={
              <About />}
            />
            <Route path="*" element={
              <Missing />} 
            /> 
          </Routes>
        <Footer />
    </div>
  );
}

export default App;
