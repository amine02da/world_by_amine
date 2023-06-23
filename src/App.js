import './App.css';
import {Routes, Route} from "react-router-dom"
import Header from './Components/Header';
import Home from './pages/Home';
import Countries_details from './pages/Countries_details';
import { useSelector } from 'react-redux';

function App() {
  const { dark_mode_value } = useSelector(state => state.Country)
  return (
    <div className={dark_mode_value ? "bodydarkmood" : ""}>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>  
        <Route path="/:cioc" element={<Countries_details/>}/>  
      </Routes>    
    </div>
  );
}

export default App;
