import React, {useState} from 'react';
import {Calendar} from "./partials/Calendar";
import {Snow} from "./partials/Snow";
import {Attribution} from "./partials/Attribution";
import {SnowGround} from "./partials/SnowGround";

export const App = () => {
  const currentYear = new Date().getFullYear()
  const initialOpenWindows = () => JSON.parse(localStorage.getItem(`openWindows.${currentYear}`)) || []
  const [openWindows, setOpenWindows] = useState(initialOpenWindows)
  const anyWindowOpen = openWindows.length > 0

  return (
    <div>
      <Calendar
        header={anyWindowOpen ? 'Advent of dogs' : 'Advent'}
        openWindows={openWindows}
        setOpenWindows={setOpenWindows}
      />
      <Attribution />
      {anyWindowOpen && (
        <>
          <SnowGround />
          <Snow />
        </>
      )}
    </div>
  )
}
