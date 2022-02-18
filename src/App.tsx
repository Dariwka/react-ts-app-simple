import React, {FC} from 'react'
import "./App.css";

type OptionalRate = {
  value: number;
  label: string;
}

const options: OptionalRate[] = [
  {value: 1, label: "one"},
  {value: 2, label: "two"},
  {value: 3, label: "three"},
  {value: 4, label: "four"},
  {value: 5, label: "five"}
]

const App:FC = () => {

  const [selectedOption, setSelectedOption] = useState<ValueType<OptionType>>(options[0]);
  return (
    <div className="App">
      <div className="header">AWESOME PROJECT</div>
      <div className="container">
        <div>
          <button>+ ADD</button>
          <div>
            <input>
            <select>

            </select>
            </input>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App