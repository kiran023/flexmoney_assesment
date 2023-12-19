import './App.css';
import { Login } from './myComponent/Login';
import { Homepage } from './myComponent/Homepage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Form } from './myComponent/Form';
import { Userpage } from './myComponent/Userpage';
import { Createaccount } from './myComponent/Createaccount';
import { Paymentpage } from './myComponent/Paymentpage';
import { useState, useEffect } from 'react'
import { database } from './firebase';
import { collection, getDocs } from 'firebase/firestore';


function App() {
  const [data, setdata] = useState([])
  const localvariable = JSON.parse(localStorage.getItem("email"))
  let collectionRef
  
  if (localvariable === null) 
    collectionRef = collection(database, 'kiran')
    else collectionRef = collection(database, localvariable)

    useEffect(() => {
      async function fetchdata() {
        const info = await getDocs(collectionRef)
        const arr = info.docs.map((e) => {

          return {
            ...e.data(), id: 1
          }
        })
        setdata(arr)
      }
      fetchdata()
    }, [])
  

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' Component={Homepage} />
          <Route path='/login' Component={Login} />
          <Route path='/form' Component={()=><Form data={data}/>} />
          <Route path='/userpage' Component={()=><Userpage d={data}/>} />
          <Route path='/register' Component={Createaccount} />
          <Route path='/payment' Component={Paymentpage} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
