import React from 'react'
import {Link } from 'react-router-dom';

/* @12 to do */

const Missing = () => {  /* when url=3000/test not exsiting so goes to missing , this is not for post/5 or any non existing id post pages*/
  return (
    <main className='Missing'>
      <h2>Page Not Found</h2>
      <p>Well,that's disappointing</p>
      <p>
        <Link to='/'>Visit Our HomePage</Link>
      </p>
    </main>
  )
}
export default Missing;
