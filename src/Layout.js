import { useContext } from 'react'
import { Route, Routes } from 'react-router-dom';

import Header from './components/Common/Header'
import mainContext from './context/mainContext'
import Popup from './components/Common/Popup';
import { NavBar } from './components/Common/NavBar';
import dataContext from './context/dataContext';

import Main from './Main';

import { Signup, Signin } from './pages/Signup';

export default function Layout() {
    const { header, nav, popup } = useContext(mainContext);
    const { userDetails } = useContext(dataContext);

    return (
        !userDetails ?
            <Routes>
                <Route path='/login' element={< Signin />} />
                <Route path='*' element={<Signup />} />
            </Routes>
            :
            <>
                {header.isShowHeader && <Header pageName={header.pageName} />}

                <Main />

                {popup.popup && <Popup>{popup.popup}</Popup>}

                {nav.isShowNav && <NavBar />}
            </>
    )
}