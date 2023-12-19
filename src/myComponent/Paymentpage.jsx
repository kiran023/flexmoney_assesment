import React,{useState}from 'react'
import {  useNavigate } from 'react-router-dom';

export const Paymentpage = () => {
    const [name, setname] = useState('');
    const [cardnumber, setcardnumber] = useState('');
    const [cvv, setcvv] = useState('');
    const [expiry, setexpiry] = useState('');
    const [amount, setamount] = useState('500');
    const navigation=useNavigate();
    const payment=()=>{
        if (!cvv || !name || !cardnumber || !expiry)
            alert("fill all the enteries")
        
            alert("endrolled successfully")
            navigation('/userpage')
    }
  return (
    <div className='form'>
        <div className='form-item'>
          <h1>Payment Details</h1>

          <div className='fill'>
          <div>Full Name</div>
          <input type="text" onChange={(e) => { setname(e.target.value) }} value={name} />
          </div>

          <div className='fill'>
          <div> Card Number</div>
          <input type="number" onChange={(e) => { setcardnumber(e.target.value) }} value={cardnumber} />
          </div>

          <div className='fill'>
          <div> Amount</div>
          <input type="number"  value={amount} />
          </div>

          <div className='fill'>
          <div> Card Expiration</div>
          <input type="number" placeholder='mmyy'onChange={(e) => { setexpiry(e.target.value) }} value={expiry} />
          </div>

          <div className='fill'>
          <div> CVV</div>
          <input type="password" onChange={(e) => { setcvv(e.target.value) }} value={cvv} />
          </div>

          <button onClick={payment} className='submit-btn'>Make Payment</button>
          
        </div>
      </div>
  )
}
