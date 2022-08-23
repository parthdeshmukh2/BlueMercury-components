import logo from './logo.svg';
import './App.css';
import Crousel from './Components/Crousel';
import { Box} from '@chakra-ui/react';
import { Slider } from './Components/Slider';

function App() {
  return (
   <Box>
    <Crousel/>
    <Slider/>
   </Box>

    
  );
}

export default App;
