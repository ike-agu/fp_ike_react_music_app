import React from 'react';
import ArtistCard from './components/ArtistCard'
import AlbumCard from './components/AlbumCard'
import Footer from './components/Footer'
import Nav from './components/Nav'
import Button from './components/Button'


function App() {
  return (
    <>
    <Nav />
    <main className='container'>
      <h1>Vibe Box</h1>
      <ArtistCard />
       <AlbumCard />
       <Button />
       <p> Coming soon...</p>

    </main>
    <Footer />
    </>
  );
}

export default App;
