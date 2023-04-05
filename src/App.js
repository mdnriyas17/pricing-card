import './App.css';
import React,{useState} from 'react';
import Counter from './pages/counter';
import Pricing from './pages/pricing';
function App() {
  const[page,setpages]=useState("Pricing")
  return (
    <div className="App">
{page==="counder"&&<Counter/>}
{page==="Pricing"&&<Pricing/>}
    </div>
  );
}
export default App;
