import React from 'react'
import Feed from './Feed';  //#5th to do
import { useStoreState } from 'easy-peasy';

const Home = ({ fetchError , isLoading} ) => {   

  const searchResults = useStoreState((state) => state.searchResults);
  return (
    <main className='Home'>
      {isLoading && <p className='statusMsg'>loading messages....</p>}
      {!isLoading &&  fetchError && <p className='statusMsg' style={{color:"red"}}>{fetchError}</p>}
      {!isLoading && !fetchError && (searchResults.length ? <Feed posts={searchResults}/> :
        <p style={{marginTop:"2rem"}}>
          No searchResults to display.
        </p>
      )}
    </main>
  )
}

export default Home;
