import {useState,useEffect} from "react";
import React from 'react'

/* this is a custome hook */
/*  It helps track the size of the browser window (width and height) and updates automatically when the window is resized. */

const useWindowSize = () => {
    const [windowSize,setWindowSize]=useState({   /* State (windowSize) = It stores the width and height of the window. Initially, both values are undefined. */
        width:undefined,
        height:undefined
    });
    useEffect(()=>{

        const handleResize=()=>{
            setWindowSize({             /* This function updates the windowSize state with the current window width and height.It is triggered whenever the window resizes. */
                width:window.innerWidth,
                height:window.innerHeight
            });
        }

        handleResize();                /* This ensures that the component gets the correct window size as soon as it loads, not just when resizing happens. */
        window.addEventListener("resize",handleResize);  /* This listens for the resize event and calls handleResize whenever the window size changes.
                                                            So, whenever the user resizes the browser window, windowSize is updated. */

        const cleanup = () =>{          /* This removes the event listener when the component unmounts (is removed from the screen).
                                           Prevents memory leaks by ensuring no unnecessary event listeners remain after the component is gone */
            console.log('runs if a useEffect dep changes');
            window.removeEventListener("resize",handleResize)
        }   
        return cleanup;
    } ,[]) /* Since the array is empty, this effect runs only once */

    return windowSize;
}

export default useWindowSize