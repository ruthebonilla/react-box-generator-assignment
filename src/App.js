import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Boxes from './components/Boxes';
import {useState} from 'react';

function App() {
const [boxes, setBoxes] = useState([]);

const [boxColor, setboxColor] = useState("");

const [form, setForm] = useState("");

const onSubmitHandler = (event)=> {
  event.preventDefault();
  let newbox = {color: boxColor};

setBoxes([...boxes, newbox]);
  setboxColor("");

}

  return (
<div className="App">
  <h1>Box Generator</h1>
    <form onSubmit={onSubmitHandler} class="form row g-3 justify-content-center mt-5">
      <div class="col-auto">
        <label  for="text" class="col-form-label">Color of Box</label>
      </div>
      <div class="col-auto">
        <input type="text" class="form-control" value={boxColor} onChange={(e) => setboxColor(e.target.value)}
        value={boxColor} />
      </div>
      <div class="col-auto">
        <button type="submit" className='btn btn-success'>submit</button>
      </div>
    </form>

<Boxes boxes={boxes} />
</div>
  );
}

export default App;
