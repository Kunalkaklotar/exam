import { useState,useEffect } from "react";
import './App.css';

function App() {
  let [num, setNum] = useState (1);
  let [app,setApp] = useState([]);
const setNext = () => {
  setNum(num === 10 ? 10 : ++num);
}
const setPrev = () => {
  setNum(num === 1 ? 1 : --num);
}

  useEffect(() => { appArray() }, [num])
  let appArray = async () => {
    let req = await fetch (`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?limit=10&page=${num}`);
    let res = await req.json();
    setApp(res.data);
  }

  console.log (app);
  return (
    <div className="main-section">
      {app.map((v,i) => {
        return<div className="main-box" key={i}>
          <span>id:{v.id}</span>
          <img src={v.image}/>
          <span>name:{v.name}</span>
          <span>vote:{v.number_of_votes}</span>
          <span>price:{v.price_starts_from}</span>
          <span>rating:{v.rating}</span>
          <span>type:{v.type}</span>
        </div>
      })}
      <button onClick={() => setPrev()}> prev </button>
      <button onClick={() => setNext()}> next </button>
    </div>
  );
}

export default App;
