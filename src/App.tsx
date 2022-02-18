import React, {FC} from 'react'
import StarRateIcon from '@material-ui/icons/StarRate';

import "./App.css";


const App:FC = () => {




  return (
    <div className="App">
      <div className="header">AWESOME PROJECT</div>
      <div className="container">
        <div className="buttonContainer">
          <button>+ ADD</button>
          <select>
            <option>one</option>
            <option>two</option>
            <option>three</option>
            <option>four</option>
            <option>five</option>
          </select>
        </div>
        <div className="boxContainer">
          <div className="box">
          <button>X</button>
            <p>Name of project</p>
           <p>link</p>
          <StarRateIcon/>
          <StarRateIcon/>
          <StarRateIcon/>
          <StarRateIcon/>
          <StarRateIcon/>
          </div>
          <div className="box">
            <button>X</button>
            <p>Name of project</p>
           <p>link</p>
          <StarRateIcon/>
          <StarRateIcon/>
          <StarRateIcon/>
          <StarRateIcon/>
          <StarRateIcon/>
          </div>
          <div className="box">
            <button>X</button>
            <p>Name of project</p>
           <p>link</p>
          <StarRateIcon/>
          <StarRateIcon/>
          <StarRateIcon/>
          <StarRateIcon/>
          <StarRateIcon/>
          </div>
          <div className="box">
          <button>X</button>
            <p>Name of project</p>
           <p>link</p>
          <StarRateIcon/>
          <StarRateIcon/>
          <StarRateIcon/>
          <StarRateIcon/>
          <StarRateIcon/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App