import { useContext } from 'react'
import { Route, Routes } from 'react-router-dom';

import Header from './components/Common/Header'
import mainContext from './context/mainContext'
import Popup from './components/Common/Popup';
import { NavBar } from './components/Common/NavBar';
import dataContext from './context/dataContext';

import { Signup, Signin, ForgotPassword } from './pages/Signup';

import Main from './Main';

export default function Layout() {
    const { header, nav, popup } = useContext(mainContext);
    const { userDetails } = useContext(dataContext);

    // if user is connected
    if (userDetails)
        return (
            <>
                {header.isShowHeader && <Header pageName={header.pageName} />}

                <Main />

                {popup.popup && <Popup>{popup.popup}</Popup>}

                {nav.isShowNav && <NavBar />}
            </>
        )
    // routes without auth
    else
        return (
            <Routes>
                <Route path='/login' element={< Signin />} />
                <Route path='/forgot-password' element={< ForgotPassword />} />
                <Route path='*' element={<Signup />} />
            </Routes>
        )

}