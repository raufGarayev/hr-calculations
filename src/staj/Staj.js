import React, { useState } from 'react';

const Staj = () => {
    const [divs, setDivs] = useState([
        { startDate: '', endDate: '', days: null },
        { startDate: '', endDate: '', days: null },
        { startDate: '', endDate: '', days: null },
        { startDate: '', endDate: '', days: null },
        { startDate: '', endDate: '', days: null },
      ]);
    
      function handleInputChange(event, divIndex, isStartDate) {
        const input = event.target.value;
        const isValidDate = !isNaN(new Date(input).getTime());
        if (isValidDate) {
          const newDivs = [...divs];
          const propName = isStartDate ? 'startDate' : 'endDate';
          newDivs[divIndex][propName] = input;
          setDivs(newDivs);
        }
      }
    
      function handleAddDiv() {
        setDivs([
          ...divs,
          { startDate: '', endDate: '', days: null },
        ]);
      }
    
      function handleCalculate() {
        const newDivs = divs.map((div) => {
          const { startDate, endDate } = div;
          if (startDate !== '' && endDate !== '') {
            const start = new Date(startDate);
            const end = new Date(endDate);
            const days = Math.round((end - start) / (1000 * 60 * 60 * 24));
            return { ...div, days };
          } else {
            return { ...div, days: null };
          }
        });
    
        setDivs(newDivs);
      }
    
      const totalDays = divs.reduce((acc, div) => {
        if (div.days !== null) {
          return acc + div.days;
        } else {
          return acc;
        }
      }, 0);
    
      const totalYears = Math.floor(totalDays / 365);
      const totalMonths = Math.floor((totalDays - (totalYears * 365)) / 30);
      const totalRemainingDays = totalDays - (totalYears * 365) - (totalMonths * 30);
    
      return (
        <div>
          {divs.map((div, index) => (
            <div key={index}>
              <input
                type="date"
                value={div.startDate}
                onChange={(event) => handleInputChange(event, index, true)}
              />
              {' - '}
              <input
                type="date"
                value={div.endDate}
                onChange={(event) => handleInputChange(event, index, false)}
              />
              {div.days !== null && (
                <>
                  <br />
                  <span>{div.days} days</span>
                  {' '}
                  <span>({Math.floor(div.days / 365)} years, {Math.floor((div.days % 365) / 30)} months, {div.days % 30} days)</span>
                </>
              )}
            </div>
          ))}
          <br />
          <button onClick={handleAddDiv}>Add Div</button>
          <button onClick={handleCalculate}>Calculate</button>
          <br />
          <br />
          <div>
            <span>Total: </span>
            <span>{totalDays} days</span>
            {' '}
            <span>({totalYears} years, {totalMonths} months, {totalRemainingDays} days)</span>
          </div>
        </div>
      );
}

export default Staj;
