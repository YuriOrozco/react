import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';

import LoginForm from './components/LoginForm'; //SI no hay index busca uno por default
import 'bootstrap/dist/css/bootstrap.css';
import {NavigationApp} from './routes'
function App(){
  return(
    <StrictMode>
      <BrowserRouter>
      <NavigationApp/>
      </BrowserRouter>
    </StrictMode>
  );
  
}
export default App;