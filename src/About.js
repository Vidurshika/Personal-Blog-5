import React from 'react'
import contImage from './cont.jpg';

/* @14 to do */

const About = () => {
  return (
    <main className='About'>
      <h2>About</h2>
      <p style={{marginTop:"1rem"}}>This is my blog and it has a lot of things about me like my recent posts and what's new with me too 😇😄🤩🥳👏💐✨🌈🍡🎊🎀💖🇱🇰.........</p>
      <div className="image-container">
        <img 
          src={contImage}
          alt="About Me" 
          loading="lazy"
          style={{
            width: "100%", 
            maxWidth: "400px", 
            height: "auto", 
            marginTop: "1rem", 
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
          }} 
        
        />
      </div>
    </main>
  )
}
export default About;
