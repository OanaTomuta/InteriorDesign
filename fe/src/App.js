import React from 'react';
import './App.css';
import Main from './pages/Main';
import Rooms from './pages/AppointmentRooms';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { FooterContainer} from "./components/footer/FooterContainer";
import BedroomOptions from "./pages/BedroomOptions";
import BathroomOptions from "./pages/BathroomOptions";
import AppointmentRooms from "./pages/AppointmentRooms";

function App() {
  return (
    <div className="App">
        <Router>
            <Navbar />
            <Switch>
                <Route path={'/appointment/rooms'}>
                    <AppointmentRooms />
                </Route>
                <Route path={'/'} >
                    <Main />
                </Route>
                <Route path={'/appointment/rooms/bedroomOptions'}>
                    <BedroomOptions />
                </Route>
                <Route path={'/appointment/rooms/bathroomOptions'}>
                    <BathroomOptions />
                </Route>
            </Switch>
        </Router>
        <FooterContainer/>
    </div>
  );
}

export default App;
