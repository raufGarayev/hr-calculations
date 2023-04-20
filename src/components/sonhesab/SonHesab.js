/* import {useState} from 'react'
import './SonHesab.sass'
import { Link } from 'react-router-dom'

const SonHesab = () => {
    const [inputValues, setInputValues] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [mezun, setMezun] = useState(0)
    const [result, setResult] = useState(0)

  const handleInputChange = (index, value) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
    if(parseFloat(inputValues[1]) > 0) {
      console.log(parseFloat(inputValues[1]))
    }
  };

  function getResult() {
    let sum = 0;
    let inputs = 0;
    for (let i = 0; i < 12; i++) {
      if(document.getElementById(`input-${i}`).value != 0) {
        sum += parseFloat(document.getElementById(`input-${i}`).value)
        inputs++
        setResult(sum / inputs)
      }
          
      }
  }

  const inputs = inputValues.map((value, index) => {
      return (<div className="sonhesab-cont-grid-input" key={index}>
    <label htmlFor={`input-${index}`}>{index + 1}. ay</label>
    <input
      id={`input-${index}`}
      type="number"
      value={value}
      onChange={e => handleInputChange(index, e.target.value)}
    />
  </div>)

  });
    

    return (
        <section className='sonhesab'>
        <Link className='home-button' to='/'>Ana səhifə</Link>
        <div className="sonhesab-cont">
            <div className="sonhesab-cont-grid">
                {inputs}
            </div>
            <div className="sonhesab-cont-mezuniyyet">
                <label htmlFor="">Məzuniyyət günlərinin sayı</label>
                <input type="number" value={mezun} onChange={(e) => setMezun(e.target.value)} />
            </div>
            <div className="sonhesab-cont-btns">
                
                <button onClick={getResult}>Hesabla</button>
            </div>
            <div className="sonhesab-cont-netice">
              <p>Orta aylıq əmək haqqı: <span>{result}</span></p>
              <p>Bir günlük əmək haqqı: <span>{(result / 30.4).toFixed(2)}</span></p>
              <p>Məzuniyyət haqqı: <span>{((result / 30.4) * mezun).toFixed(2)}</span></p>
            </div>
        </div>
        </section>
    );
};

export default SonHesab;
 */

import {useState} from 'react'
import './SonHesab.sass'
import { Link } from 'react-router-dom'

const SonHesab = () => {
const [inputValues, setInputValues] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
const [mezun, setMezun] = useState(0)
const [result, setResult] = useState(0)

const handleInputChange = (index, value) => {
  const newInputValues = [...inputValues];
  newInputValues[index] = value;
  setInputValues(newInputValues);
};

const handleFillInputs = () => {
  console.log("clicked")
  if (inputValues[0] > 0) {
      const newInputValues = inputValues.map((value, index) => {
          if (index === 0) {
              return value;
          }
          return inputValues[0];
      });
      setInputValues(newInputValues);
  }
}

const inputs = inputValues.map((value, index) => {
  if(index > 0) {
    return (
      <div className="sonhesab-cont-grid-input" key={index}>
          <label htmlFor={`input-${index}`}>{index + 1}. ay</label>
          <input
              id={`input-${index}`}
              type="number"
              value={value}
              onChange={e => handleInputChange(index, e.target.value)}
          />
          
      </div>
  );
  }
  else {
    return (
      <div className="sonhesab-cont-grid-input" key={index}>
          <label htmlFor={`input-${index}`}>{index + 1}. ay</label>
          <input
              id={`input-${index}`}
              type="number"
              value={value}
              onChange={e => handleInputChange(index, e.target.value)}
          />
          {inputValues[0] > 0 && <button className='sonhesab-cont-grid-input-btn' onClick={handleFillInputs}>Doldur</button>}
      </div>
  );
  }
});

function getResult() {
  let sum = 0;
  let inputs = 0;
  for (let i = 0; i < 12; i++) {
    if(document.getElementById(`input-${i}`).value != 0) {
      sum += parseFloat(document.getElementById(`input-${i}`).value)
      inputs++
      setResult(sum / inputs)
    }
        
    }
}

const handleCalculateResult = () => {
  let sum = 0;
  let inputs = 0;
  for (let i = 0; i < 12; i++) {
      if (inputValues[i] !== 0) {
          sum += parseFloat(inputValues[i]);
          inputs++;
      }
  }
  setResult(sum / inputs);
}

const handleMezuniyyetChange = (e) => {
  setMezun(e.target.value);
}

return (
  <section className='sonhesab'>
      <Link className='home-button' to='/'>Ana səhifə</Link>
      <div className="sonhesab-cont">
          <div className="sonhesab-cont-grid">
              {inputs}
          </div>
          <div className="sonhesab-cont-mezuniyyet">
              <label htmlFor="">Məzuniyyət günlərinin sayı</label>
              <input type="number" value={mezun} onChange={handleMezuniyyetChange} />
          </div>
          <div className="sonhesab-cont-btns">
              <button onClick={getResult}>Hesabla</button>
          </div>
          <div className="sonhesab-cont-netice">
              <p>Orta aylıq əmək haqqı: <span>{result}</span></p>
              <p>Bir günlük əmək haqqı: <span>{(result / 30.4).toFixed(2)}</span></p>
              <p>Məzuniyyət haqqı: <span>{((result / 30.4) * mezun).toFixed(2)}</span></p>
          </div>
      </div>
  </section>
);
};

export default SonHesab;