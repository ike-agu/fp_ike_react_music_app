import React, {useState} from 'react'

const ArtistCard = () => {
  const [artistName, ] = useState('Michael Jackson')
  const [musicGenre, ] = useState('R&B/Soul')
  const [biography, ] = useState(" Michael Jackson was a multi-talented musical entertainer who enjoyed a chart-topping career both with the Jackson 5 and as a solo artist. He released one of the best-selling albums in history, 'Thriller,' in 1982, and had other number-one hits on 'Bad' and 'Off the Wall.<br>Known as the 'King of Pop,' Michael Jackson was a best-selling American singer, songwriter and dancer. As a child, Jackson became the lead singer of his family's popular Motown group, the Jackson 5. He went on to a solo career of astonishing worldwide success, delivering No. 1 hits from the albums Off the Wall, Thriller and Bad. In his later years, Jackson was dogged by allegations of child molestation. He died in 2009 at age 50 of a drug overdose just before launching a comeback tour " )

  return (
    <div>
      <h2>Artist: {artistName}</h2>
      <h4>Music genre: {musicGenre}</h4>
      <h2 className="bio">Biography</h2>
      <p className="bio-text">{biography}</p>
    </div>
  );
}

export default ArtistCard
