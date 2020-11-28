import React, {useState} from 'react';
import {Calendar} from "./partials/Calendar";
import {Snow} from "./partials/Snow";

export const App = () => {
  const initialOpenWindows = () => localStorage.getItem('openWindows') || []
  const [openWindows, setOpenWindows] = useState(initialOpenWindows)
  const anyWindowOpen = openWindows.length > 0

  return (
    <div>
      <Calendar header={anyWindowOpen ? 'Advent of dogs' : 'Advent'} setOpenWindows={setOpenWindows} />
      {anyWindowOpen && <Snow />}
    </div>
  )
}
