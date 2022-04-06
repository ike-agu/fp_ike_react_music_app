import React, { useState } from 'react';

const AlbumCard = () => {

  const [artistAndAlbum, ] = useState([
    {
      name: 'Michael-Jackson',
      song: "Thriller",
      year: "1982",
      album: "Thriller",
      img: "https://m.media-amazon.com/images/I/4101GM3XBSL.jpg",

    },
    {
      name: 'Michael-Jackson',
      song: "speechless",
      year: "2001",
      album: "Invincible",
      img: "https://thatgrapejuice.net/wp-content/uploads/2015/06/michael_jackson_123.png.webp"
    },
    {
      name: 'Michael Jackson',
      song: "Remember the time",
      year: 1991,
      album: "Dangerous",
      img: "https://upload.wikimedia.org/wikipedia/en/d/d2/Michael_Jackson_-_Remember_the_Time.png"
    },

  ])



  const renderRows = () => {
    return artistAndAlbum.map(A =>
    <tr>
      <td >{A.name}</td>
      <td>{A.song}</td>
      <td>{A.year}</td>
      <td>{A.album}</td>
      <td><img src={A.img} alt=""/></td>
    </tr>)
  }

  return (
    <table className="artist-box">
      <thead>
        <tr className='title-p'>
          <th>Artist</th>
          <th>Song</th>
          <th>Year</th>
          <th>Album</th>
          <th>Album-cover</th>
        </tr>

         { renderRows() }

      </thead>

    </table>
  )

}

export default AlbumCard;
