import React from 'react';
import './App.css';
import Main from './pages/Main';
import Rooms from './pages/AppointmentRooms';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { FooterContainer} from "./components/footer/FooterContainer";
import AppointmentRooms from "./pages/AppointmentRooms";
import AppointmentForm from "./pages/AppointmentForm";
import SelectedRoomOptions from "./pages/SelectedRoomOptions";


function App() {
  return (
    <div className="App">
        <Router>
            <Navbar />
            <Switch>
                <Route path={'/appointment/rooms/bathroomOptions'}>
                    <SelectedRoomOptions />
                </Route>
                <Route path={'/appointment/rooms'}>
                    <AppointmentRooms />
                </Route>
                <Route path={'/appointment/form'}>
                    <AppointmentForm />
                </Route>
                <Route path={'/'} >
                    <Main />
                </Route>

            </Switch>
        </Router>
        <FooterContainer/>
    </div>
  );
}

export default App;
