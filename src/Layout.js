import { useContext } from 'react'
import Header from './components/Common/Header'
import { mainContext } from './context/mainContext'
import Main from './Main';

function Layout() {
    const { header,nav,popup } = useContext(mainContext);

    return <>
        {header.isShowHeader && <Header pageName={header.pageName}/>}

        <Main/>

        {popup.popup && '<Popup setPopup={setPopup}/>'}

        {nav.isShowNav && '<Nav setIsShowNav={setIsShowNav}/>'}
    </>
}