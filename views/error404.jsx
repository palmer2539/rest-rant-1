const React = require('react');
const Def = require('./default');

function error404 () {
  return(
    <Def>
      <main>
        <h1>404: Page Not Found</h1>
        <p>Oops, sorry for the inconvinience, but we cannot find this page!</p>
      </main>
    </Def>
  )
}

module.exports = error404