import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

function Filter() {
  return (

    <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
    <ToggleButton id="tbg-radio-1" value={1} variant='secondary' className='text-white'>
      Frontend
    </ToggleButton>
    <ToggleButton id="tbg-radio-2" value={2} variant='secondary' className='text-white'>
      Backend
    </ToggleButton>
    <ToggleButton id="tbg-radio-3" value={3} variant='secondary' className='text-white'>
      Gestion de projet
    </ToggleButton>
  </ToggleButtonGroup>
  )
}

export default Filter;