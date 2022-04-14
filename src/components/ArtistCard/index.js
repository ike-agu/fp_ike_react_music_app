// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';


// export const ArtistCard = () => {

//   const navigateTo = useNavigate()
//   const [lyrics, setLyrics] = useState([])

//   useEffect(()=> {
//     const fetchLyrics = async () => {
//       try {
//         let {data} = await axios.get('https://api.lyrics.ovh/v1/Michael jackson/thriller');
//         setLyrics(data);
//       } catch (error) {
//         console.warn(error);
//       }
//     }
//     fetchLyrics()

//   }, [])

//   return (
//     <ul>
//       {
//         lyrics.map( lyric => (
//           <li key={lyric.artist} onClick={() => navigateTo(lyric.artist.toString())}>
//             <strong>{lyric.headline}</strong>

//           </li>
//         ))
//       }
//     </ul>
//   )
// }
