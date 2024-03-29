import React, {useState} from 'react'
import './Mezuniyyet.sass'
import moment from 'moment/moment';
import DatePicker from 'react-date-picker/dist/entry.nostyle';
import '../../datepicker.css'
import { Link } from 'react-router-dom';


const Mezuniyyet = () => {

    const [giris, setGiris] = useState(new Date());
    const [cixis, setCixis] = useState(new Date());
    const [total, setTotal] = useState(0)
    const [il, setIl] = useState(365)
    const [used, setUsed] = useState(0)
    const [gunluk, setGunluk] = useState(21)


    const handleSubmit = e => {
        e.preventDefault()
        let time1 = new Date(giris)
        let time2 = new Date(cixis)
        let diff = time2.getTime() - time1.getTime()
        setTotal(Math.ceil(diff / (1000 * 3600 * 24)));
        calculateSums(Math.ceil(diff / (1000 * 3600 * 24)))
        console.log(giris)
    }

    function calculateSums(totalDays) {
        const duration = moment.duration(totalDays, 'days');
        const years = duration.years();
        const months = duration.months();
        const days = duration.days();
        
        return {years, months, days}
      }

  return (
    <div className='mezuniyyet'>
        <Link className='home-button' to='/'>Ana səhifə</Link>
        <form id="booking-form" className="booking-form">
            <div className="form-group">
                <div className="mezuniyyet-giris">
                    <label htmlFor='giris'>İşə başlama tarixi</label>
                    <div className="input-wrapper">
                        <DatePicker 
                            onChange={(value) => setGiris(value)} 
                            value={giris} 
                            format="dd-MM-yyyy"
                        />
                    </div>

                </div>
                <div className="mezuniyyet-cixis">
                    <label htmlFor="cixis">İşdən çıxma tarixi</label>
                    <div className="input-wrapper">
                        <DatePicker 
                            onChange={(value) => setCixis(value)} 
                            value={cixis} 
                            format="dd-MM-yyyy"
                        />
                    </div>
                    
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
            <p>İşlədiyi gün sayı: <span>{total} gün</span> vəya <span>{calculateSums(total).years} il {calculateSums(total).months} ay {calculateSums(total).days} gün</span></p>
            <p>1 günə düşən miqdar: <span>{(total / il).toFixed(2)}</span></p>
            <p>Məzuniyyət günlərinin sayı: <span>{(((total / il) * gunluk) - used).toFixed(2)}</span></p>
        </div>
    </div>
  )
}

export default Mezuniyyet