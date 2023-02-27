import React, {useState} from 'react'
import './Mezuniyyet.sass'
import DatePicker from 'react-date-picker/dist/entry.nostyle';
import moment from 'moment/moment';

const Mezuniyyet = () => {

    const [giris, setGiris] = useState(new Date());
    const [cixis, setCixis] = useState(new Date());
    const [total, setTotal] = useState(0)
    const [totalYears, setTotalYears] = useState(0)
    const [totalMonths, setTotalMonths] = useState(0)
    const [totalDays, setTotalDays] = useState(0)
    const [il, setIl] = useState(365)
    const [used, setUsed] = useState(0)
    const [gunluk, setGunluk] = useState(21)


    const handleSubmit = e => {
        e.preventDefault()
        let time1 = new Date(giris)
        let time2 = new Date(cixis)
        let diff = time2.getTime() - time1.getTime()
        setTotal(Math.ceil(diff / (1000 * 3600 * 24)));
        calculateYears(Math.ceil(diff / (1000 * 3600 * 24)))
        calculateMonths(Math.ceil(diff / (1000 * 3600 * 24)))
        calculateDays(Math.ceil(diff / (1000 * 3600 * 24)))
    }

    function calculateYears(totalDays) {
        const duration = moment.duration(totalDays, 'days');
        const years = duration.years();
        const months = duration.months();
        const days = duration.days();
        setTotalYears(years)
      }
      function calculateMonths(totalDays) {
        const duration = moment.duration(totalDays, 'days');
        const months = duration.months();
        setTotalMonths(months)
      }
      function calculateDays(totalDays) {
        const duration = moment.duration(totalDays, 'days');
        const days = duration.days();
        setTotalDays(days)
      }

  return (
    <div className='mezuniyyet'>
        <form id="booking-form" className="booking-form">
            <div className="form-group">
                <div className="mezuniyyet-giris">
                    <label htmlFor='giris'>İşə başlama tarixi</label>
                    {/* <DatePicker onChange={(e) => alert('New date is: ', e.current.value)}  id='giris' name='giris' /> */}
                    <input 
                        type="date"  
                        onChange={(e) => 
                            setGiris(e.target.value)
                            
                        } 
                    value={giris}  
                    id='giris' 
                    name='giris' 
                    />

                </div>
                <div className="mezuniyyet-cixis">
                    <label htmlFor="cixis">İşdən çıxma tarixi</label>
                    {/* <DatePicker  onChange={(e) => alert('New date is: ', e.current.value)}  id='cixis' name='cixis' /> */}
                    <input type="date" id='cixis' name='cixis' onChange={(e) => setCixis(e.target.value)} value={cixis} />
                </div>
                <div className="mezuniyyet-il">
                    <label htmlFor="il">İl dövründə olan günün miqdarı</label>
                    <input type="number" id="il" className="il" value={il} onChange={(e) => setIl(e.target.value)}  />
                </div>
                <div className="form-quantity">
                    <label htmlFor="gunluk">İşçiyə düşən aylıq məzuniyyət günü</label>
                    <input type="number" name="gunluk" id="gunluk" className="nput-text qty text" value={gunluk} onChange={(e) => setGunluk(e.target.value)} />
                </div>
                <div className="form-quantity">
                    <label htmlFor="used">İstifadə etdiyi gün</label>
                    <input type="number" name="used" id="used" className="nput-text qty text" value={used} onChange={(e) => setUsed(e.target.value)} />
                </div>
            </div>
            <button className='submit' type='submit' onClick={handleSubmit}>Hesabla</button>
        </form>
        <div className='netice'>
            <p>İşlədiyi gün sayı: <span>{total} gün</span> vəya <span>{totalYears} il {totalMonths} ay {totalDays} gün</span></p>
            <p>1 günə düşən miqdar: <span>{(total / il).toFixed(2)}</span></p>
            <p>Məzuniyyət günlərinin sayı: <span>{(((total / il) * gunluk) - used).toFixed(2)}</span></p>
        </div>
    </div>
  )
}

export default Mezuniyyet