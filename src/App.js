import './App.css';
import { Login } from './myComponent/Login';
import { Homepage } from './myComponent/Homepage';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import { Form } from './myComponent/Form';
import { Userpage } from './myComponent/Userpage';
import { Createaccount } from './myComponent/Createaccount';
import { Paymentpage } from './myComponent/Paymentpage';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' Component={Homepage}/>
          <Route path='/login' Component={Login}/>
          <Route path='/form' Component={Form}/>
          <Route path='/userpage' Component={Userpage}/>
          <Route path='/register' Component={Createaccount}/>
          <Route path='/payment' Component={Paymentpage}/>
        </Routes>
        </Router> 
    </div>
  );
}

export default App;
