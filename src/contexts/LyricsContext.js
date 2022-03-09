import React, { createContext, useState, useEffect } from "react";
import { trackLyricsGet, trackGet } from "./../constants";


export const LyricsContext = createContext();

const LyricsContextProvider = ({}) => {

    const commontrack_id = window.location.pathname.split("/")[3];
    const [doneFetchTrack, setDoneFetchTrack] = useState(false);
    const [doneFetchLyrics, setDoneFetchLyrics] = useState(false);
    const [track, setTrack] = useState([]);
    const [lyrics, setLyrics] = useState([]);

    useEffect(() => {
        getTrack(commontrack_id);
    }, [commontrack_id]);

    useEffect(() => {
        //getLyrics(commontrack_id);
    }, []);

    const getTrack = commontrack_id => {
        fetch(trackGet(commontrack_id))
            .then(res => res.json())
            .then(data => {
                const { body } = data.message;
                setDoneFetchTrack(true);
                !Array.isArray(body) && setTrack(body.track);
            })
            .catch(err => console.log(err));
    };

};