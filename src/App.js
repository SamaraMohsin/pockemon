import logo from './logo.svg';
import './App.css';
import UseMyApi from './Hooks/UseApi';
import { useEffect, useState } from 'react';
import LeftSide from './Components/LeftSide'
import Header from './Components/Header';
function App() {


  const [data,setData] = useState();

  function afnan(event){
    async function CallMyAPIchild() {
      const result = await fetch(event.target.id)
      .then((response) => response.json());
      setData(result);
      console.log(result);
      
  }
  CallMyAPIchild();

  }


  const a = UseMyApi();
  return (
    <>
        <Header />
        <div className="App">
      {/* <LeftSide /> */}
      <div className='leftside'>
    {
      a.map((boj,i)=>{
        return <div key={i} id={boj.url} onClick={afnan}>
          {boj.name} 
          </div>
      })
    }
    </div>

    <div className='rightside'>
      {
        data != null ? 
        <>
        <div>
          <h1>Name: {data.name}</h1>
          <img src={data.sprites.other.dream_world.front_default} alt='' />
          <img src={data.sprites.other.home.front_default} alt='' />
          
        </div> 
        <div><h3>Height: {data.height}</h3></div>
        <div><h3>Weight: {data.weight}</h3></div>
        <div><h3>Ability: {data.abilities[0].ability.name}    </h3></div>
        
        </>
        

        : ''
      }
    </div>
    </div>
    </>
   
  );
}

export default App;
