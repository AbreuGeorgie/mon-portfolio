import React, { useState } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

function Filter({change}) {

  return (

    <ToggleButtonGroup type="radio" name="options" defaultValue="Frontend" onChange={change}>
    <ToggleButton id="tbg-radio-1" value="Frontend" variant='secondary' className='text-white'>
      Frontend
    </ToggleButton>
    <ToggleButton id="tbg-radio-2" value="Backend" variant='secondary' className='text-white'>
      Backend
    </ToggleButton>
    <ToggleButton id="tbg-radio-3" value="Projet" variant='secondary' className='text-white'>
      Gestion de projet
    </ToggleButton>
  </ToggleButtonGroup>
  )
}

export default Filter;