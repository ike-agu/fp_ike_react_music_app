import React from 'react';
import './style.css';
import ArtistCard from '../../components/ArtistCard'
import AlbumCard from '../../components/AlbumCard'

export const Artists = () => {
  return (
    <>
    <h1>Vibe box Artists</h1>
    <ArtistCard />
    <AlbumCard />
    </>
  )
}
