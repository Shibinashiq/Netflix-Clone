import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import './App.css'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import {Originals,Action} from './urls'
function App() {
  return (
    <div className="App">
        <NavBar/>
        <Banner/>
        <RowPost url ={Originals}title='Netflix Originals'/>
        <RowPost title='Action' url={Action} isSmall  />
    </div>
  );
}

export default App;
