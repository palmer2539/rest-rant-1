const React = require('react');
const Def = require('../default');

function index (data) {
  let placesFormatted = data.places.map((place) => {
    return (
      <div>
        <h2>{place.name}</h2>
        <img style={{width:300+'px', height:300+'px'}} src={place.pic} alt={place.name}/>
      </div>
    )
  })
  return(
    <Def>
      <main>
        <h1>Index of Places</h1>
        {placesFormatted}
      </main>
    </Def>
  )
}

module.exports = index