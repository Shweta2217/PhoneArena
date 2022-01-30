import './Global.css';
import {Route, BrowserRouter, Switch} from 'react-router-dom';

//Comps
import Nav from './Components/Navbar/Nav';
import Home from './Components/Home/Home';
import DeviceList from './Components/DeviceList/DeviceList';
import DetailsPage from './Components/DetailsPage/DetailsPage';
import PageNotFound from './Components/NoDataPages/PageNotFound';
import Footer from './Components/Footer/Footer';

function App() {
  return (<>
   <BrowserRouter>
      
      {/* Navbar show on the every route */}
      <Nav />
       <Switch>
       <Route exact path='/'><Home /></Route>
       <Route path="/list/:SearchData"><DeviceList /></Route>
        <Route exect path="/device/:deviceId"><DetailsPage /></Route> 
        <Route path="*"><PageNotFound /></Route>
        </Switch>
      <Footer />
    </BrowserRouter>
  </>);
}

export default App;
