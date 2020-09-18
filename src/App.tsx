import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import Subscribe from './pages/Subscribe'

function App() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li><Link to='/home'>Home</Link></li>
          <li><Link to='/subscribe'>Subscribe</Link></li>
        </ul>
        <hr />
        <Route exact path='/home' component={Home} />
        <Route path='/subscribe' component={Subscribe} />
      </div>
    </BrowserRouter>
  );
}

export default App;


function Home() {
  return (
    <div>
      <h2>Home</h2>
      Homeページです!
    </div>
  )
}
