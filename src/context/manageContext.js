import { createContext, useState } from "react";
import mainContext from './mainContext'
import dataContext from './dataContext'
import { fakeData } from "./fakeData";

export const DataProvider = ({ children }) => {

    const [userDetails, setUserDetails] = useState(fakeData.userDetails);
    const [pageName, setPageName] = useState();
    const [isShowHeader, setIsShowHeader] = useState(true);
    const [isShowNav, setIsShowNav] = useState(false);
    const [popup, setPopup] = useState(false);

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


