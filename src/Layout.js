import { useContext } from 'react'
import Header from './components/Common/Header'
import mainContext from './context/mainContext'
import Main from './Main';
import Popup from './components/Common/Popup';
import { NavBar } from './components/Common/NavBar';

export default function Layout() {
    const { header, nav, popup } = useContext(mainContext);

    return <>
        {header.isShowHeader && <Header pageName={header.pageName} />}

        <Main />

        {popup.popup && <Popup>{popup.popup}</Popup>}

        {nav.isShowNav && <NavBar />}
    </>
}