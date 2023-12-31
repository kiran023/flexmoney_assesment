import React from 'react'
import { useState, useEffect } from 'react'
import { Navbar } from './Navbar';
import {  useNavigate } from 'react-router-dom';

export const Userpage = (props) => {
    const navigate = useNavigate();
    const [data, setdata] = useState(props.d);
    const arr = ["6-7AM", "7-8AM", "8-9AM", "5-6PM"];
    const currday = new Date();
    const currmonth = currday.getMonth();
    const curryear = currday.getFullYear();
    let month, year;

    data.map((e) => {
        const date = e.enrollon
        // const date=1647235200000
        month = new Date(date).getMonth()
        year = new Date(date).getFullYear()

    })

    const changeBatch = () => {
        console.log(currmonth, curryear);
        if (curryear === year && currmonth === month)
            alert("you can only change your batch next month")
    }

    const logout = () => {
        localStorage.clear();
        alert("Logout Successfully")
        navigate('/')
    }

    return (
        <>
        <Navbar></Navbar>
        <div>
            {
                (currmonth != month && curryear != year) ?
                    <div className='form'>
                        <div className='form-item'>
                            <p>Your subscription has expired  </p>
                            <button onClick={() => { navigate('/form') }} className='submit-btn'>Enroll Now</button>

                        </div>

                    </div>
                    :
                    <div>
                        {data.map((e) => {
                            return (
                                <div className='form' key={e.batch}>
                                    <div className="form-item1">
                                        <p>Name: {e.name}</p>
                                        <p>Mobile Number: {e.mobile}</p>
                                        <p>Email Address:{e.email}</p>
                                        <p>Enrolled on:{new Date(e.enrollon).getDate() + "/" + month + "/" + year}</p>
                                        <p>Your current batch:{arr[(e.batch) - 1]}</p>
                                        <div>
                                            <button onClick={changeBatch} className='submit-btn'>Change your batch</button>
                                            <button onClick={logout} className='submit-btn'>Log Out</button>
                                        </div>

                                    </div>


                                </div>
                            )

                        })
                        }
                    </div>
            }
            </div>

        </>
    )
}
