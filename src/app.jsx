import { useState } from 'preact/hooks'
import 'bootstrap/dist/css/bootstrap.min.css';
import preactLogo from './assets/preact.svg'
import './app.css'
import Button from 'react-bootstrap/Button';

// or less ideally

import Navbar from './Components/Navbar'
import FormDisabledInputExample from './Components/Form'
export function App() {
  const [count, setCount] = useState(0)

  return (
  
   
      <FormDisabledInputExample>

      </FormDisabledInputExample>
 

      
    
   
  )
}
