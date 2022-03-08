import React, { createContext, useState, useEffect } from 'react';
import { chartTracksGet, trackSearch } from '../constants'; 

// paso °1
export const SongsContext = createContext();

const SongsContextProvider = ({ children }) => {
    // estados -> useState
    const [props1, setProps] = useState();
    const [props2, setProps2] = useState();
    const [props3, setProps3] = useState();

   // ciclos de vida -> useEffect 

   // funciones lógicas
   const getTopTracks = () => {

   }; 

   const getTracks = q_track => {

   };

   const validateQTrack = () => {

   };

  // paso ° 2
  return (
    <SongsContext.Provider value={{props1, props2, props3, getTopTracks, getTracks, validateQTrack }}>
        {children}
    </SongsContext.Provider>
  )
}

export default SongsContextProvider;