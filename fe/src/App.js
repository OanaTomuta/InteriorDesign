import React, {useState} from 'react';
import './App.css';
import Main from './pages/Main';
import Rooms from './pages/AppointmentRooms';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { FooterContainer} from "./components/footer/FooterContainer";
import AppointmentRooms from "./pages/AppointmentRooms";
import AppointmentForm from "./pages/AppointmentForm";
import Form from "./components/form/Form";
import AdminLoginForm from "./pages/AdminLoginForm";
import AdminRoomConfig from "./pages/AdminRoomConfig";
import AdminStyleConfig from "./pages/AdminStyleConfig";
import AdminPage from "./pages/AdminPage";
import {LANGUAGES} from "./components/i18n";

function App() {

    const [locale, setLocale] = useState(LANGUAGES.ENGLISH);
  return (
    <div className="App">
        <Router>
            <Navbar locale={locale} setLocale={setLocale}/>

            <Switch>
                <Route path={'/admin/config/rooms'}>
                    <AdminRoomConfig locale={locale}/>
                </Route>
                <Route path={'/admin/config/styles'}>
                    <AdminStyleConfig locale={locale}/>
                </Route>
                <Route path={'/admin/config'}>
                    <AdminPage locale={locale}/>
                </Route>
                <Route path={'/admin-login'}>
                    <AdminLoginForm locale={locale}/>
                </Route>
                <Route path={'/appointment/rooms'}>
                    <AppointmentRooms locale={locale} />
                </Route>
                <Route path={'/appointment/form'}>
                    <AppointmentForm locale={locale} />
                </Route>
                <Route path={'/'} >
                    <Main locale={locale} />
                </Route>
            </Switch>
        </Router>
        <FooterContainer locale={locale}/>
    </div>
  );
}

export default App;
