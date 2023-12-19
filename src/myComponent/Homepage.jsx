import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Navbar } from './Navbar';

export const Homepage = () => {
    const user = JSON.parse(localStorage.getItem("email"))
    const navi = useNavigate()
    
    const navigate=()=>{
       if(user===null)
       navi('/login')
      else navi('/form')

    }
    return (
        <>
        <Navbar></Navbar>
        <div className='Home'>
            <div className='backgroundIMG'>
                <div className='btn'>
                    <button onClick={navigate}>JOIN NOW </button>
                </div>
            </div>
        </div>
        </>
       
    )
}
