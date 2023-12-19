import React, { useState } from 'react'
import { database } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { Navbar } from './Navbar';

export const Form = (props) => {
    const localvariable = JSON.parse(localStorage.getItem("email"))
    const collectionref = collection(database, localvariable)
    const [name, setname] = useState('');
    const [age, setage] = useState('');
    const [email, setemail] = useState('');
    const [batch, setbatch] = useState('');
    const [mobile, setmobile] = useState('');
    const navigate = useNavigate();
    
    const submitForm = () => {
        if (!age || !name || !email || !batch || !mobile)
            alert("fill all the enteries")
        else if(mobile<7000000000)
        alert("enter valid mobile number")
        else if (age < 18 || age > 65)
            alert("currently we are not taking registration of age below 18 and above 65")
        else if(props.data.length===1)
         alert("only one person can enroll from one account")
        else {
            addDoc(collectionref, {
                name: name,
                age: age,
                email: email,
                mobile: mobile,
                batch: batch,
                enrolled: "yes",
                enrollon: Date.now(),
            })
                .then(() => {
                    alert("submitted")
                    setname('')
                    setemail('')
                    setbatch('')
                    setage('')
                    setmobile('')
                    navigate('/payment')

                })
                .catch((err) => {
                    alert(err.message)
                });
        }
    }
    return (

        <>
        <Navbar></Navbar>
            <div className='form'>
                <div className='form-item'>
                    <h1>Registration Form</h1>
                    <div className='fill'>
                        <input type="text" placeholder="FULL NAME" onChange={(e) => { setname(e.target.value) }} value={name} />
                    </div>
                    <div className='fill'>
                        <input type="number" placeholder="AGE" onChange={(e) => { setage(e.target.value) }} value={age} />
                    </div>
                    <div className='fill'>
                        <input type="email" placeholder="EMAIL" onChange={(e) => { setemail(e.target.value) }} value={email} />
                    </div>
                    <div className='fill'>
                        <input type="number" placeholder="MOBILE  NUMBER" onChange={(e) => { setmobile(e.target.value) }} value={mobile} />
                    </div>
                    <div style={{ marginTop: "20px" }}>
                        <select className='filled' value={batch} onChange={(e) => { setbatch(e.target.value) }}>
                            <option value="" >BATCH TIMING</option>
                            <option value="1">6-7AM</option>
                            <option value="2">7-8AM</option>
                            <option value="3">8-9AM</option>
                            <option value="4">5-6PM</option>
                        </select>
                    </div>
                    <div className='submit-form'>
                        <button onClick={submitForm}>SUBMIT</button>
                    </div>
                </div>
            </div>
        </>
    )
}
