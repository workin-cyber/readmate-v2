import { useState } from "react";
import mainContext from './mainContext'
import dataContext from './dataContext'
import { fakeData } from "./fakeData";

export const DataProvider = ({ children }) => {


    // const [userDetails, setUserDetails] = useState(fakeData.userDetails);//TODO the initial state need to be null
    const [userDetails, setUserDetails] = useState();//TODO the initial state need to be null
    const [pageName, setPageName] = useState("Dashboard");
    const [isShowHeader, setIsShowHeader] = useState(true);
    const [isShowNav, setIsShowNav] = useState(false);
    const [popup, setPopup] = useState(); // content of popup

    return (
        <mainContext.Provider value={{
            popup: {
                popup,
                setPopup
            },
            header: {
                pageName,
                setPageName,
                isShowHeader,
                setIsShowHeader
            },
            nav: {
                isShowNav,
                setIsShowNav
            }
        }}>
            <dataContext.Provider value={{ userDetails, setUserDetails }}>
                {children}
            </dataContext.Provider>
        </mainContext.Provider>
    )
}


