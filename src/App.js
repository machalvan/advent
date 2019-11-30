import React, {useEffect, useState} from 'react';
import {Calendar} from "./partials/Calendar";
import {Snow} from "./partials/Snow";

function App() {
  const [openWindows, setOpenWindows] = useState(localStorage.getItem('openWindows') || [])
  const [anyWindowOpen, setAnyWindowOpen] = useState(openWindows.length > 0)
  const header = anyWindowOpen ? 'Advent of dogs' : 'Advent'
  const showSnow = anyWindowOpen

  useEffect(() => {
    const openWindows = localStorage.getItem('openWindows') || []
    setAnyWindowOpen(openWindows.length > 0)
  }, [localStorage.getItem('openWindows')])

  return (
    <div>
      <Calendar header={header} setOpenWindows={setOpenWindows} />
      {showSnow && <Snow />}
    </div>
  )
}

export default App;