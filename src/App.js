import './App.css';
import { useState } from 'react';
function App() {
  const [color,setColor]= useState("olive")
  return (
    <>
      <div className=' w-full h-screen duration-150' style={{backgroundColor:color}}>
<div className='fixed flex flex-wrap justify-center bottom-44 inset-x-1 px-0' >
  <div className='bg-white justify-center rounded-xl px-2 py-4 gap-3' > 
  <button className='bg-red-600 text-white px-1 py-2 rounded-full m-1 h-10 w-20 text-center outline'
   onClick={()=>setColor("red")}> Red</button>
   <button className='bg-green-700 text-white px-1 py-2 rounded-full m-1 h-10 w-20 text-center outline'
   onClick={()=>setColor("green")}> Green</button>
   <button className='bg-yellow-400 text-white px-1 py-2 rounded-full m-1 h-10 w-20 text-center outline'
   onClick={()=>setColor("yellow")}> Yellow</button>
   <button className='bg-blue-900 text-white px-1 py-2 rounded-full m-1 h-10 w-20 text-center outline'
   onClick={()=>setColor("blue")}> Blue</button>
  </div>
  </div>
  </div>


      
    
    </>
  );
}

export default App;
