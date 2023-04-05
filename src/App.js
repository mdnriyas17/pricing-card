import './App.css';
import React,{useState} from 'react';
import Pricing from './pages/pricing';
import Counter from './pages/counter';
function App() {
 const [page]=useState("Pricing")
  return (
    <div className="App">
{page==='Pricing'&& <Pricing/>} 
{page==='counder'&& <Counter/>} 
    </div>
  );
}
export default App;
