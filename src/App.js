import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routing from './Routing/Routing';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routing/>
      </BrowserRouter>
    </div>
  );
}

export default App;
