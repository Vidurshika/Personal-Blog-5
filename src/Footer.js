import React from 'react';
import { useStoreState } from 'easy-peasy';
 
/* @13 to do */

const Footer = () => {
  const postCount = useStoreState((state)=> state.postCount);
  return (
    <footer className='Footer'>
      <p>{postCount} Blog Posts 🤭</p>
    </footer>
  )
}
export default Footer;