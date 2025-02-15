import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

/* useAxiosFetch hook is a custom React Hook that fetches data from an API using axios. 
It manages the fetched data, loading state, and error handling. */

const useAxiosFetch = (dataUrl) => {
    const [data,setData] =useState([]);  /* data: Stores the fetched API response. */
    const [fetchError,setFetchError] = useState(null);
    const [isLoading,setIsLoading] =useState(null);
    
    /* This effect runs when dataUrl changes, triggering a new fetch. */

    useEffect(()=>{
        let isMounted=true;
        const source = axios.CancelToken.source();  /* isMounted is used to prevent state updates if the component unmounts.
                                                       source creates a cancellation token to cancel API requests when the component unmounts. */

        const fetchData = async (url) => {
            setIsLoading(true);
            try{
                /* Sends a GET request to the API. */
                const response = await axios.get(url, {
                    cancelToken: source.token
                });
                if (isMounted){
                    setData(response.data); /* If the response is successful, data is updated. */
                    setFetchError(null);
                }
            } catch (err){
                if(isMounted){
                    setFetchError(err.message);
                    setData([]);
                }
            } finally{
                isMounted && setTimeout(()=> setIsLoading(false), 2000); /*  The loading state is cleared after 2 seconds. */
            }
        }

        fetchData(dataUrl);

        const cleanup = () =>{
            console.log('clean up function')
            isMounted = false;
            source.cancel();
        } /* This function runs when the component using the hook unmounts.
             It prevents memory leaks by stopping state updates (isMounted = false).
             Cancels any ongoing API requests (source.cancel()). */

        return cleanup;

    }, [dataUrl]);

    return { data, fetchError, isLoading };
  
}

export default useAxiosFetch;