import React, { useState } from 'react';
import './Staj.sass'
import moment from 'moment/moment';

const Staj = () => {
    const [divs, setDivs] = useState([
        { startDate: '', endDate: '', days: 0 },
        { startDate: '', endDate: '', days: 0 },
        { startDate: '', endDate: '', days: 0 },
        { startDate: '', endDate: '', days: 0 },
        { startDate: '', endDate: '', days: 0 },
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
          { startDate: '', endDate: '', days: 0 },
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
            return { ...div, days: 0 };
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
    
      const totalSums = (totalDays) => {
        const duration = moment.duration(totalDays, 'days');
        const years = duration.years();
        const months = duration.months();
        const days = duration.days();

        return {years, months, days};
      }

      const divTotals = (totalDays) => {
        const duration = moment.duration(totalDays, 'days');
        const years = duration.years();
        const months = duration.months();
        const days = duration.days();

        return {years, months, days};
      }
    
      return (
        <section className='staj'>
          <div className="staj-cont">
            {divs.map((div, index) => (
              <div className='inputs' key={index}>
                <span>{index+1}. i?? yeri: </span>
                <input
                  type="date"
                  value={div.startDate}
                  onChange={(event) => handleInputChange(event, index, true)}
                />
                
                <input
                  type="date"
                  value={div.endDate}
                  onChange={(event) => handleInputChange(event, index, false)}
                />
                  <>
                    <span className='total-days'>{div.days} g??n ({divTotals(div.days).years} il, {divTotals(div.days).months} ay, {divTotals(div.days).days} g??n)</span>
                  </>
            </div>
          ))}
          <div className="btns">
            <button onClick={handleAddDiv}>???? yeri ??lav?? et</button>
            <button onClick={handleCalculate}>Hesabla</button>
          </div>
          <div className='total-staj'>
            <h2>C??mi staj: <span>{totalDays} g??n</span> <span>({totalSums(totalDays).years} il, {totalSums(totalDays).months} ay, {totalSums(totalDays).days} g??n)</span></h2>
          </div>
          </div>
          
        </section>
      );
}

export default Staj;
