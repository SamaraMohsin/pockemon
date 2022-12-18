import "./App.css";
import UseMyApi from "./Hooks/UseApi";
import { useEffect, useState } from "react";
import LeftSide from "./Components/LeftSide";
import Header from "./Components/Header";
import { FirstData } from "./Components/FirstData";
function App() {
  const [data, setData] = useState(FirstData);

  function handleClick(event) {
    async function CallMyAPIchild() {
      const result = await fetch(event.target.id).then((response) =>
        response.json()
      );
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
        <div className="leftside">
          {a.map((boj, i) => {
            return (
              <div key={i} id={boj.url} onClick={handleClick}>
                {boj.name}
              </div>
            );
          })}
        </div>

        <div className="rightside">
          {data != null ? (
            <>
              <div className="heading">
                <h1>{data.name}</h1>
              </div>
              <div className="image-container">
                <img
                  className="img-1"
                  src={data.sprites.other.dream_world.front_default}
                  alt=""
                />
                <img
                  className="img-2"
                  src={data.sprites.other.home.front_default}
                  alt=""
                />
              </div>
              <div className="information-container">
                <div className="sub-container">
                  <div>
                    <h3>Height: {data.height}</h3>
                  </div>
                  <div>
                    <h3>Weight: {data.weight}</h3>
                  </div>
                  <div className="ability-conatiner">
                    <h3>Abilities</h3>
                    <div>
                      {data.abilities.map((key) => {
                        return <button>{key.ability.name}</button>;
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default App;
