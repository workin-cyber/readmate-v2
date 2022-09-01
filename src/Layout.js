import { useContext } from 'react'
import Header from './components/Common/Header'
import mainContext from './context/mainContext'
import Main from './Main';
import Popup from './components/Common/Popup';
import { NavBar } from './components/Common/NavBar';
import { Route, Routes } from 'react-router-dom';
import dataContext from './context/dataContext';

import { Signup } from './pages/Signup';

export default function Layout() {
    const { header, nav, popup } = useContext(mainContext);
    const { userDetails } = useContext(dataContext);

    return (
        !userDetails ?
            <Routes>
                <Route path='/login' element={< >login</>} />
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