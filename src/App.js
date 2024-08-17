import React from 'react'
import HeroNav from './components/HeroNav'
import OverVision from './components/OverVision'
import Options from './components/Options'
import Popular from './components/Popular'
import RoadMap from './components/RoadMap'

const App = () => {
  return (
    <div>
      <HeroNav/>
      <OverVision/>
      <Options/>
      <Popular/>
      <RoadMap/>
    </div>
  )
}

export default App